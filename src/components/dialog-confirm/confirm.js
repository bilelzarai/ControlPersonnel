import { Button, Dialog, DialogContent, DialogFooter } from 'react-md'

const ConfirmDialog = (visible, title,disable) => {
    return (
        <Dialog
            visible={visible}
            title={title}
            disable={disable}

        >
            <DialogContent>

                test
                {title}
                {/* {desc} */}
            </DialogContent>
            <DialogFooter>
            <Button id="dialog-close" onClick={disable}>
                Close
            </Button>
        </DialogFooter>
        </Dialog >
    )

}
export default ConfirmDialog;