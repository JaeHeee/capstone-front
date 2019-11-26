import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal({changeShowPopUp, errorMessage}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open] = React.useState(true);
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={changeShowPopUp}
            >
                <div style={modalStyle} className={classes.paper}>
                    <p id="simple-modal-description">
                        {errorMessage}
                    </p>
                    <button type="button" onClick={changeShowPopUp}>
                        확인
                    </button>
                </div>
            </Modal>
        </div>
    );
}