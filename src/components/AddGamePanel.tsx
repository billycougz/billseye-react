import { useState, useEffect, useRef } from 'react';
import Timer from "./Timer";
import { Typeahead } from 'react-bootstrap-typeahead';
import Modal from "./Modal";
import { API } from 'aws-amplify';
import { listGameNames, listLocations, listPlayers } from '../graphql/queries';
import AddNewButton from './AddNewButton';
import { createGame } from '../graphql/mutations';

const placeholderText = 'Nothing selected...';

type FormModel = {
    duration?: number;
    date: Date;
    location: number;
    gameName: number;
    winner: number;
    loser: number;
}

type FormFieldType = 'duration' | 'date' | 'location' | 'gameName' | 'winner' | 'loser';

function AddGamePanel({ onGameAdded, mobile }: any) {
    const [formData, setFormData] = useState<FormModel>(Object);
    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const [newEntryField, setNewEntryField] = useState<any>();
    const [searchValue, setSearchValue] = useState('');
    const [showGameAddedAlert, setShowGameAddedAlert] = useState(false);
    const [duration, setDuration] = useState(undefined);

    // Refs
    const locationRef = useRef(null);
    const gameNameRef = useRef(null);
    const winnerRef = useRef(null);
    const loserRef = useRef(null);

    // Field options
    const [locations, setLocations] = useState<any[]>([]);
    const [gameNames, setGameNames] = useState<any[]>([]);
    const [players, setPlayers] = useState<any[]>([]);

    // @ts-ignore
    useEffect(async () => {
        const [locationsResponse, gameNamesResponse, playersResponse] = await Promise.all([
            (API.graphql({ query: listLocations }) as Promise<any>),
            (API.graphql({ query: listGameNames }) as Promise<any>),
            (API.graphql({ query: listPlayers }) as Promise<any>)
        ]);
        if (locationsResponse?.data?.listLocations?.items) {
            setLocations(locationsResponse.data.listLocations.items);
        }
        if (gameNamesResponse?.data?.listGameNames?.items) {
            setGameNames(gameNamesResponse.data.listGameNames.items);
        }
        if (playersResponse?.data?.listPlayers?.items) {
            setPlayers(playersResponse.data.listPlayers.items);
        }
    }, [])

    const onInputSelect = (field: FormFieldType, output: any) => {
        console.log(output);
        const value = field === 'date' ? output : output.length ? output[0].id : undefined;
        formData[field] = value;
        setFormData({ ...formData });
        setInvalidFields(invalidFields.filter(invalidField => invalidField !== field));
    }
    const onInputBlur = (field: FormFieldType, value: string) => {
        if (!formData[field] && value) {
            setInvalidFields([...invalidFields, field]);
            openAddNewModal(field);
        }
    }
    const openAddNewModal = (field: any) => {
        const prefix = mobile ? 'mobile-' : '';
        const modalBtn = document.getElementById(prefix + 'modal-btn');
        const modal = document.getElementById(prefix + 'staticBackdrop');
        if (modalBtn && !modal?.classList.contains('show')) {
            setNewEntryField(field);
            modalBtn.click();
        }
    };
    const onInputChange = (field: FormFieldType, fieldOptions: any[], value: string) => {
        const optionMatch = fieldOptions.find((option: any) => option.name === value)
        formData[field] = optionMatch ? optionMatch.id : undefined;
        if (optionMatch) {
            setInvalidFields(invalidFields.filter(invalidField => invalidField !== field));
        }
        setFormData(formData);
        setSearchValue(value);
    }
    const isFieldValid = (field: string) => {
        return invalidFields.includes(field) ? 'is-invalid' : ''
    }
    const isFormValid = () => {
        const { location, gameName, loser, winner, date } = formData;
        return location && gameName && loser && winner;
    }

    const clearField = (field: string) => {
        const inputField = document.getElementById(field);
        if (inputField) {
            // @ts-ignore
            inputField.value = '';
        }
        setNewEntryField(null);
    }

    const handleNewFieldDataSubmit = (field: string, newObject: any) => {
        switch (field) {
            case 'location':
                setLocations([...locations, newObject]);
                break;
            case 'gameName':
                setGameNames([...gameNames, newObject]);
                break;
            case 'winner':
                setPlayers([...players, newObject]);
                break;
            case 'loser':
                setPlayers([...players, newObject]);
                break;
            default:
                break;
        }
        setFormData({ ...formData, [field]: newObject.id });
        setInvalidFields(invalidFields.filter(invalidField => invalidField !== field));
    }

    const handleSubmit = async () => {
        const response = await API.graphql({
            query: createGame,
            variables: {
                input: {
                    duration: duration,
                    locationId: formData.location,
                    gameNameId: formData.gameName,
                    winnerId: formData.winner,
                    loserId: formData.loser
                }
            }
        });
        clearAllFields();
        // @ts-ignore
        onGameAdded(response.data.createGame);
        setShowGameAddedAlert(true);
        setTimeout(() => setShowGameAddedAlert(false), 3000);
    }

    function clearAllFields() {
        // @ts-ignore
        locationRef.current.clear();
        // @ts-ignore
        gameNameRef.current.clear();
        // @ts-ignore
        winnerRef.current.clear();
        // @ts-ignore
        loserRef.current.clear();
        // @ts-ignore
        document.getElementById('today').value = '';
    }

    return (
        <div id="addGameTile" className="card">

            <div className="mt-0"><h3>Add Game Record</h3>
                <hr className="mt-0" />
            </div>

            { /* showGameAddedAlert as key will force a remount on game added  */}
            <Timer onChange={setDuration} key={showGameAddedAlert} />

            {localStorage.getItem('groupID') && <div id="groupGameDefaultContainer" className="mt-2">
                <button id="groupGameDefaultButton" className="btn btn-warning w-100" type="button">
                    Group Defaults
                </button>
            </div>}

            <form>

                <div className="input-group mt-2 d-none">
                    <span className="input-group-text">Date</span>
                    <input id="today" type="date" className="form-control" name="date"
                        onChange={(e) => onInputSelect('date', e.target.value)}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Location</span>
                    <Typeahead
                        inputProps={{
                            className: isFieldValid('location')
                        }}
                        ref={locationRef}
                        id="location"
                        labelKey='name'
                        onChange={(location) => onInputSelect('location', location)}
                        onBlur={(e: any) => onInputBlur('location', e.target.value)}
                        onFocus={(e: any) => setSearchValue(e.target.value)}
                        onInputChange={(value) => { onInputChange('location', locations, value) }}
                        options={locations}
                        emptyLabel={<AddNewButton type='Location' onClick={() => openAddNewModal('location')} />}
                        placeholder={placeholderText}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Game Name</span>
                    <Typeahead
                        inputProps={{
                            className: isFieldValid('gameName')
                        }}
                        id="game-name"
                        labelKey='name'
                        ref={gameNameRef}
                        onChange={(gameName) => onInputSelect('gameName', gameName)}
                        onFocus={(e: any) => setSearchValue(e.target.value)}
                        onInputChange={(value) => { onInputChange('gameName', gameNames, value) }}
                        onBlur={(e: any) => onInputBlur('gameName', e.target.value)}
                        options={gameNames}
                        placeholder={placeholderText}
                        emptyLabel={<AddNewButton type='Game Name' onClick={() => openAddNewModal('gameName')} />}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Winner</span>
                    <Typeahead
                        inputProps={{
                            className: isFieldValid('winner')
                        }}
                        id="winner"
                        labelKey='alias'
                        ref={winnerRef}
                        onChange={(winner) => onInputSelect('winner', winner)}
                        onFocus={(e: any) => setSearchValue(e.target.value)}
                        onInputChange={(value) => { onInputChange('winner', players, value) }}
                        onBlur={(e: any) => onInputBlur('winner', e.target.value)}
                        options={players}
                        placeholder={placeholderText}
                        emptyLabel={<AddNewButton type='Player' onClick={() => openAddNewModal('winner')} />}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Loser</span>
                    <Typeahead
                        inputProps={{
                            className: isFieldValid('loser')
                        }}
                        id="loser"
                        labelKey='alias'
                        ref={loserRef}
                        onChange={(loser) => onInputSelect('loser', loser)}
                        onFocus={(e: any) => setSearchValue(e.target.value)}
                        onInputChange={(value) => { onInputChange('loser', players, value) }}
                        onBlur={(e: any) => onInputBlur('loser', e.target.value)}
                        options={players}
                        placeholder={placeholderText}
                        emptyLabel={<AddNewButton type='Player' onClick={() => openAddNewModal('loser')} />}
                    />
                </div>

                <div className="mt-2">
                    <button
                        id="submitGameButton"
                        className="btn btn-success w-100"
                        type="button"
                        disabled={!isFormValid()}
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>

                <div className="mt-2 d-none" id="testAlert">
                    <div className="alert alert-warning m-0">
                        <strong>This is a test.</strong> This game will be deleted from the database. Refresh the page
                        to exit test mode.
                    </div>
                </div>

                <div className="mt-2 d-none" id="quickAlert">
                    <div className="alert alert-warning">
                        <strong>Quick Mode: </strong> Data will be submitted as:
                        <ul>
                            <li>Date: Today</li>
                            <li>Location: Salmon Brook</li>
                            <li className="d-none">Event: None</li>
                            <li>Game: Cricket (No Points)</li>
                            <li className="d-none">Type: 1 v 1</li>
                            <li>Overtime: No</li>
                        </ul>
                    </div>
                </div>

                {showGameAddedAlert && <div id="gameAdded" className="mt-2">
                    <div className="alert alert-success m-0">
                        <strong>Your game was added!</strong>
                    </div>
                </div>}

            </form>

            <Modal mobile={mobile} field={newEntryField} value={searchValue} onCancel={clearField} onSubmit={handleNewFieldDataSubmit} />
        </div>
    );
}

export default AddGamePanel;
