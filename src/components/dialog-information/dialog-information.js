import { Dialog } from "react-md"
import './dialog-information.scss'
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
// import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const DialogInformation = ({ visible, onHide, icon, title, description, link, skip }) => {
    console.log(title, "title")
    return (
        <Dialog
            className="dialogRect"
            visible={visible}
            onHide={onHide}
            icon={icon}
            title={title}
            description={description}
            link={link}

        >
            <div className="dialogRect-close">
                <IconButton aria-label="delete">
                    <CloseIcon />
                </IconButton>
            </div>

            <div className="dialogRect-header">
                <div className="icon">{icon}</div>
            </div>
            <div className="dialogRect-title">

                {title}

            </div>
            <div className="dialogRect-description">

                {description}

            </div>
            {
                link &&
                <div className="dialogRect-description" onClick={() => onHide()}>
                    {link}
                </div>
            }
            <div className="dialogRect-skip">
                {skip && skip}
            </div>
        </Dialog >

    )

}
export default DialogInformation