import PropTypes from 'prop-types';
import React from 'react';
import CreateProjectForm from './CreateProjectForm';

// material-ui
import { Button, CardContent, Divider, IconButton, Modal } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import CloseIcon from '@mui/icons-material/Close';

const isMobile = window.screen.width < 600;

const Body = React.forwardRef(({ handleClose }, ref) => (
    <div ref={ref} tabIndex={-1}>
        <MainCard
            sx={{
                position: 'absolute',
                width: isMobile ? '100%' : '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            title="Anzeige aufgeben"
            content={false}
            secondary={
                <IconButton onClick={handleClose} size="large">
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        >
            <CardContent>
                <CreateProjectForm />
            </CardContent>
            <Divider />
        </MainCard>
    </div>
));

Body.propTypes = {
    handleClose: PropTypes.func
};

// ==============================|| SIMPLE MODAL ||============================== //

export default function SimpleModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" type="button" onClick={handleOpen}>
                Anzeige aufgeben
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Body handleClose={handleClose} />
            </Modal>
        </div>
    );
}
