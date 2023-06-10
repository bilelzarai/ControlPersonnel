
import { Button, Dialog } from 'react-md';
import './reset-pwd.scss'

const ResetPwd = ({ visible, disable, changePwd = true}) => {
    return (
        <Dialog
            className='pwd-reset'
            visible={visible}
            disable={disable}
            changePwd={changePwd}
        >
            <div className='gap' >

                {!changePwd ?

                    <>
                        <div className='gap-title'>Please enter your new password</div>
                        <div className='gap-subtitle'>Your new password must be different from previous used passwords.</div>

                    </>
                    :
                    <>
                        <div className='gap-title'>Change password</div>
                        <div className='passwords'>
                            <div>Current password</div>
                            <div>
                                <input className='input' type='password' ></input>
                            </div>
                        </div>
                    </>

                }
                <div className='passwords'>
                    <div>New password</div>
                    <div>
                        <input className='input' type='password' ></input>
                    </div>
                </div>
                <div className='passwords'>
                    <div>Confirm password</div>
                    <input className='input' type='password' ></input>

                </div>
                <Button className='button' onClick={() => disable()}>Confirm</Button>
            </div>
        </Dialog >)
}


export default ResetPwd;