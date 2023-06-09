import { Button, Dialog, DialogFooter } from "react-md"
// import './dialog-information.scss'
// import IconButton from '@mui/material/IconButton';

// import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import './dialog-confirm-rect.scss';
import { IconButton } from "@mui/material";

const DialogConfirmRect = ({ visible, disable, icon, title, description, link, skip }) => {
    const Send = () => {
        console.log(visible, "title")

    }
    return (
        <Dialog
            className="dialogConfirmRect"
            id="simple-dialog"
            visible={visible}
            onRequestClose={disable}
            aria-labelledby="dialog-title"
        >


            <div className="dialogConfirmRect-body">

                <div className="dialogConfirmRect-body-icon">
                    {/* 
                    <Button disabled>

                    </Button> */}
                    <IconButton className="icon-round"  aria-label="delete">
                        <PermIdentityOutlinedIcon />
                    </IconButton>
                </div>

                <div className="second-part">
                    <div>Confirm ?</div>
                    <div>                Please confirm if you {description}
                    </div>
                </div>
            </div>
            <DialogFooter
                className="footer">
                <Button id="dialog-close" className="button-cancel" onClick={disable}>
                    Cancel
                </Button>
                <Button id="dialog-close" className="button-confirm" onClick={() => Send()}>
                    Confirm
                </Button>
            </DialogFooter>
        </Dialog>

    )

}
export default DialogConfirmRect