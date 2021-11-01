import React, { useEffect, useState } from "react";
import { createGameName, createGroup, createLocation, createPlayer } from "../graphql/mutations";
import { API } from "aws-amplify";

function Modal({ field, onCancel, onSubmit, value, mobile }: any) {

    const [inputData, setInputData] = useState<any>({});
    const [dataValid, setDataValid] = useState(false);
    const [fieldText, setFieldText] = useState('');

    useEffect(() => {
        if (field === 'winner' || field === 'loser') {
            setInputData({ firstName: value, lastName: '', alias: '' });
            setFieldText('player');
        } else if (field === 'gameName') {
            setInputData({ name: value });
            setFieldText('game name');
        } else {
            setInputData({ name: value });
            setFieldText(field);
        }
    }, [field]);

    useEffect(() => {
        if (field === 'winner' || field === 'loser') {
            const { firstName, lastName, alias } = inputData;
            setDataValid(firstName && lastName && alias);
        } else {
            setDataValid(!!inputData.name);
        }
    }, [inputData]);

    const cap = (name: any) => name && name.charAt(0).toUpperCase() + name.slice(1);

    const getMutationType = (field: string) => {
        switch (field) {
            case 'location':
                return createLocation;
            case 'gameName':
                return createGameName;
            case 'winner':
                return createPlayer;
            case 'loser':
                return createPlayer;
            case 'group':
                return createGroup;
            default:
                return null;
        }
    }

    const getMutationTypeString = (field: string) => {
        switch (field) {
            case 'location':
                return 'createLocation';
            case 'gameName':
                return 'createGameName';
            case 'winner':
                return 'createPlayer';
            case 'loser':
                return 'createPlayer';
            case 'group':
                return 'createGroup';
            default:
                return null;
        }
    }

    const handleSubmit = async () => {
        const response = await API.graphql({
            query: getMutationType(field),
            variables: {
                input: inputData
            }
        });
        // @ts-ignore
        onSubmit(field, response.data[getMutationTypeString(field)]);
        const modalBtn = document.getElementById('modal-btn');
        if (modalBtn) {
            modalBtn.click();
        }
    }

    const handleCancel = () => {
        setInputData({});
        setDataValid(false);
        onCancel(field);
    }

    const handleInputChange = (e: any) => {
        const modalField = e.target.id;
        const value = e.target.value;
        switch (modalField) {
            case 'name':
                setInputData({ ...inputData, name: value });
                break;
            case 'firstName':
                setInputData({ ...inputData, firstName: value });
                break;
            case 'lastName':
                setInputData({ ...inputData, lastName: value });
                break;
            case 'alias':
                setInputData({ ...inputData, alias: value });
                break;
            default:
                break;
        }
        console.log(inputData, dataValid);
    }

    const prefix = mobile ? 'mobile-' : '';

    return (
        <>
            <button id={`${prefix}modal-btn`} className="d-none" data-bs-toggle="modal" data-bs-target={`#${prefix}staticBackdrop`} />
            <div className="modal fade" id={`${prefix}staticBackdrop`} data-bs-backdrop="static" data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">New {fieldText}?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p>This {fieldText} has never been entered.</p>
                            <p>If it should exist, close and retry. Otherwise, go ahead and create it.</p>

                            {field && field !== 'winner' && field !== 'loser' && (<>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">{cap(field)}</span>
                                    <input type="text" className="form-control" id="name" value={inputData.name} onChange={handleInputChange} />
                                </div>
                            </>)}

                            {field && (field === 'winner' || field === 'loser') && (<>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">First Name</span>
                                    <input type="text" className="form-control" id="firstName" value={inputData.firstName} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Last Name</span>
                                    <input type="text" className="form-control" id="lastName" value={inputData.lastName} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Alias</span>
                                    <input type="text" className="form-control" id="alias" value={inputData.alias} onChange={handleInputChange} />
                                </div>
                            </>)}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={handleCancel}>Close</button>
                            <button type="button" className="btn btn-primary" disabled={!dataValid} onClick={handleSubmit}>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
