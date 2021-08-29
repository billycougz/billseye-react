import React from "react";

function Modal({field, onCancel}: any) {
    const cap = (name: any) => name && name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <>
            <button id="modal-btn" className="d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
            <div className="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">New {field}?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p>This {field} has never been entered.</p>
                            <p>If it should exist, close and retry. Otherwise, go ahead and create it.</p>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">{cap(field)}</span>
                                <input type="text" className="form-control" id="basic-url"
                                       aria-describedby="basic-addon3" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={() => onCancel(field)}>Close</button>
                            <button type="button" className="btn btn-primary" disabled>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
