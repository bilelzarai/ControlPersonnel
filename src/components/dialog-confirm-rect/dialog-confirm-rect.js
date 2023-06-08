import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Typography } from "react-md"
// import './dialog-information.scss'
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
// import AttachEmailIcon from '@mui/icons-material/AttachEmail';

import './dialog-confirm-rect.scss';

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

                    <div></div>

                    <div>
                        <div>Confirm ?</div>
                        <div>                Please confirm if you {description}
                        </div>
                    </div>
                </div>
            <DialogFooter
                className="footer">
                <Button id="dialog-close" className="button-cancel"  onClick={disable}>
                cancel
                </Button>
                <Button id="dialog-close" className="button-confirm" onClick={() => Send()}>
                confirm
                </Button>
            </DialogFooter>
        </Dialog>

    )

}
export default DialogConfirmRect