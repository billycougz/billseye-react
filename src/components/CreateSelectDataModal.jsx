import { Modal, Button, Form } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { createGameName, createGroup, createLocation, createPlayer } from "../graphql/mutations";
import { API } from "aws-amplify";

function CreateSelectDataModal({ show, field, onCancel, onCreate, value }) {
    const [inputData, setInputData] = useState({});
    const [dataValid, setDataValid] = useState(false);
    const [fieldText, setFieldText] = useState('');

    const firstName = useRef();

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

    const cap = (name) => name && name.charAt(0).toUpperCase() + name.slice(1);

    const handleInputChange = (e) => {
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
    }

    const handleCreate = async () => {
        const response = await API.graphql({
            query: getMutationType(field),
            variables: {
                input: inputData
            }
        });
        console.log(response.data[getMutationTypeString(field)]);
        onCreate(response.data[getMutationTypeString(field)]);
    }


    const getMutationType = (field) => {
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

    const getMutationTypeString = () => {
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

    return (
        <Modal show={show}>
          
          <Modal.Header>
            <Modal.Title>
              New {field}?
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This {fieldText} has never been entered.</p>
            <p>If it should exist, close and retry. Otherwise, go ahead and create it.</p>

            <div className={field && field !== 'winner' && field !== 'loser' ? '' : 'd-none'}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">{cap(field)}</span>
                    <input type="text" className="form-control" id="name" value={inputData.name} onChange={handleInputChange} />
                </div>
            </div>

            <div className={!field || !(field === 'winner' || field === 'loser') ? 'd-none' : ''}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">First Name</span>
                    <input ref={firstName} type="text" className="form-control" id="firstName" value={inputData.firstName} onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Last Name</span>
                    <input type="text" className="form-control" id="lastName" value={inputData.lastName} onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Alias</span>
                    <input type="text" className="form-control" id="alias" value={inputData.alias} onChange={handleInputChange} />
                </div>
            </div>

          </Modal.Body>

          <Modal.Footer>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCancel}>
                Cancel
            </button>
            <button type="button" className="btn btn-primary" disabled={!dataValid} onClick={handleCreate}>
                Create
            </button>
          </Modal.Footer>

        </Modal>
      );
};
 export default CreateSelectDataModal;