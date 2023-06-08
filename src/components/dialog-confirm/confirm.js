import {  Button, Dialog, Form, MailSVGIcon } from 'react-md'
import './confirm.scss'
// import icon from '../../images/icon-mail.png'
// import back from '../../images/back.png'
// import { Backspace } from '@react-md/material-icons';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';


const ConfirmDialog = ({
    title,
    description,
    // btnTitle,
    imgCard,
    visible,
    // onHide,
    // msg,
}) => {
    return (
        <Dialog
            className="resetPwd"
            visible={visible}
        //   focusOnMount={false}
        //   portal={true}
        >
            <Form >
                <div >
                    <div className='back'>
                        <Button
                        themeType="contained" 
                            theme="clear"
                        >
                            {/* <IconButton color="primary" aria-label="add an alarm"> */}
                            <BackspaceOutlinedIcon />

                        </Button>
                    </div>
                    <div className='resetPwd-title'>{title}</div>
                    <div className='desc'>
                        <div>
                            {/* <img src={icon} alt='' /> */}
                            <MailSVGIcon />
                        </div>
                        <div>Reset via Email<div>
                        </div>Link will be send to your email address</div>
                    </div>
                    <label>
                        <input required placeholder="Email" type="email" className="input"
                        // onChange={e => setEmail(e.target.value)} 
                        />
                    </label>
                </div>
                <button className='button'>Send link via Email</button>
            </Form>

        </Dialog>
    )
}

export default ConfirmDialog
