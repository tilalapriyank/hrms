

const DeleteModal = ({ employee, onClose }) => {
    if (!employee) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

            <div className='card overflow-y-auto w-[500px]'>
                <div className='card-header'>
                    <h2 className='text-[20px] font-bold text-heading'>Delete Employee</h2>
                </div>
                <div className='card-body'>
                    <p className="font-regular text-heading text-1">Are you sure you wan't to delete ?</p>
                </div>
                <div className='card-footer flex justify-end gap-3 pt-5'>
                    <button className='btn-primary flex items-center gap-2' onClick={onClose}>Close</button>
                    <button className='btn-primary flex items-center gap-2 bg-red-500 [background-image:unset]'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default DeleteModal;
