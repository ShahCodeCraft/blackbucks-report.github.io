import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './sixMonthReportModal.css';
import ReportScreen from '../../screens/app/report.screen';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

export default function SixMonthReportModal({modalOpen,handleClose,selectedUserRowId}:any) {
     const closeModal=()=>{
        handleClose();
     }
    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='modal-container'>
                        <ReportScreen selectedUserId={selectedUserRowId} />
                    </div>
                    <button className='close-icon' onClick={() => closeModal()}>X</button>
                </Box>
            </Modal>
        </div>
    );
}