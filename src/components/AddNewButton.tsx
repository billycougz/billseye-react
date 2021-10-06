function AddNewButton({ type, onClick }: any) {
    return (
        <button className="btn btn-secondary btn-sm btn-add" onClick={onClick}>
            Add New {type}
        </button>
    );
}

export default AddNewButton;