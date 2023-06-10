
import { Button, Dialog } from 'react-md';
import './edit-profile.scss'

const EditProfile = ({ visible, disable, changePwd = true }) => {
    return (
        <Dialog
            className='edit-profile'
            visible={visible}
            disable={disable}
            changePwd={changePwd}
        >
            <div className='gap' >

                <div className='gap-title'>Edit Profile</div>
                <div className='fullName'>
                    <div className='labels'>
                        <div>Name :</div>
                        <div>
                            <input className='input' type='text' ></input>
                        </div>
                    </div>
                    <div className='labels'>
                        <div>Surname :</div>
                        <div>
                            <input className='input' type='text' ></input>
                        </div>
                    </div>

                </div>


                <div className='labels'>
                    <div>Email Address :</div>
                    <div>
                        <input className='input' type='email' ></input>
                    </div>
                </div>
                <div className='labels'>
                    <div>Phone : </div>
                    <input className='input' type='number' ></input>

                </div>
                <Button className='button' onClick={() => disable()}>Confirm</Button>
            </div>
        </Dialog >)
}


export default EditProfile;