import { DialogContainer } from 'react-md'

const ConfirmDialog = (visible, close, title,desc) => {
    return (
        <DialogContainer
            visible={visible}
            close ={close}
        >
            <div>

                {title} {desc}
            </div>

        </DialogContainer>
    )

}
export default ConfirmDialog;