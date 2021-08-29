import React, {useState} from 'react';
import Timer from "./Timer";
import { Typeahead } from 'react-bootstrap-typeahead';
import Modal from "./Modal";

type Props = {
    locations: OptionData[];
    gameNames: OptionData[];
    players: OptionData[];
}

type OptionData = {
    id: number;
    name: string;
}

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

function AddGamePanel({ locations, gameNames, players }: Props) {
    const [formData, setFormData] = useState<FormModel>(Object);
    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const [newEntryField, setNewEntryField] = useState<any>();

    const onInputSelect = (field: FormFieldType, output: any) => {
        const value = field === 'date' ? output : output.length ? output[0].id : undefined;
        formData[field] = value;
        setFormData({...formData});
        setInvalidFields(invalidFields.filter(invalidField => invalidField !== field));
    }
    const onInputBlur = (field: FormFieldType, event: any) => {
        if (!formData[field] && event.target.value) {
            const formatFieldName = (name: any) => {
                return ['winner', 'loser'].includes(field) ? 'player' : name === 'gameName' ? 'game name' : name;
            }
            setInvalidFields([...invalidFields, field]);
            const modalBtn = document.getElementById('modal-btn');
            if (modalBtn) {
                setNewEntryField(formatFieldName(field));
                modalBtn.click();
            }
        }
    }
    const onInputChange = (field: FormFieldType, fieldOptions: any[], value: string) => {
        const optionMatch = fieldOptions.find((option: any) => option.name === value)
        formData[field] = optionMatch ? optionMatch.id : undefined;
        if (optionMatch) {
            setInvalidFields(invalidFields.filter(invalidField => invalidField !== field));
        }
        setFormData(formData);
    }
    const isFieldValid = (field: string) => {
        return invalidFields.includes(field) ? 'is-invalid' : ''
    }
    const isFormValid = () => {
        const { location, gameName, loser, winner, date } = formData;
        return location && gameName && loser && winner && date;
    }
    const clearField = (field: string) => {
        const inputField = document.getElementById(field);
        if (inputField) {
            // @ts-ignore
            inputField.value = '';
        }
    }
    return (
        <div id="addGameTile" className="card">

            <div className="mt-0"><h3>Add New Game Record</h3>
                <hr className="mt-0" />
            </div>

            <Timer />

            <div id="groupGameDefaultContainer" className="mt-2">
                <button id="groupGameDefaultButton" className="btn btn-warning w-100" type="button">
                    Group Defaults
                </button>
            </div>

            <form>

                <div className="input-group mt-2">
                    <span className="input-group-text">Date</span>
                    <input id="today" type="date" className="form-control" name="date"
                           onChange={(e) => onInputSelect('date', e.target.value)}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Location</span>
                    <Typeahead
                        inputProps={{
                            className: isFieldValid('location'),
                        }}
                        id="location"
                        labelKey='name'
                        onChange={(location) => onInputSelect('location', location)}
                        onBlur={(e) => onInputBlur('location', e)}
                        onInputChange={(value) => {onInputChange('location', locations, value)}}
                        options={locations}
                        placeholder={placeholderText}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Game Name</span>
                    <Typeahead
                        inputProps={{
                            className: 'asfasffsaf',
                        }}
                        id="game-name"
                        labelKey='name'
                        onChange={(gameName) => onInputSelect('gameName', gameName)}
                        onBlur={(e) => onInputBlur('gameName', e)}
                        options={gameNames}
                        placeholder={placeholderText}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Winner</span>
                    <Typeahead
                        id="winner"
                        labelKey='name'
                        onChange={(winner) => onInputSelect('winner', winner)}
                        onBlur={(e) => onInputBlur('winner', e)}
                        options={players}
                        placeholder={placeholderText}
                    />
                </div>

                <div className="input-group mt-2">
                    <span className="input-group-text">Loser</span>
                    <Typeahead
                        id="loser"
                        labelKey='name'
                        onChange={(loser) => onInputSelect('loser', loser)}
                        onBlur={(e) => onInputBlur('loser', e)}
                        options={players}
                        placeholder={placeholderText}
                    />
                </div>

                <div className="mt-2">
                    <button id="submitGameButton" className="btn btn-success w-100" type="submit" disabled={!isFormValid()}>
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

                <div id="gameAdded" className="mt-2 d-none">
                    <div className="alert alert-success m-0">
                        <strong>Your game was added!</strong>
                    </div>
                </div>

            </form>

            <Modal field={newEntryField} onCancel={clearField} />

        </div>
    );
}

export default AddGamePanel;
