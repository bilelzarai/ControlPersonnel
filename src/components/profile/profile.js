import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
// import image from 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import './profile.scss'
import { Button, Dialog } from 'react-md';
import { Alert } from '@mui/material';


const Profile = ({ visible, disable, img, firstName = 'bilel', lastName, mail, phone, building, role, password }) => {

    return (
        <Dialog
            visible={visible}
            disable={disable}
            className='dialog'
            img={img}
            firstName={firstName}
            lastName={lastName}
            mail={mail}
            phone={phone}
            building={building}
            role={role}
            password={password}

        >
            <div className='exit'> <BackspaceOutlinedIcon /></div>

            <div className='profile'>
                <div className='profile-title'> Welcome to your profile </div>
                <div className='profile-body'>
                    <div className='image'>
                        <img className='img' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                        <div className='img-update'> <CameraAltOutlinedIcon /></div>

                    </div>
                    <div className='information'>
                        <div className='label'>
                            <input className='data' type='text' disabled placeholder={firstName} />
                            <div className='icon' onClick={() => {
                                <Alert severity="success" color="info">
                                    This is a success alert — check it out!
                                </Alert>
                            }} >
                                <BrushOutlinedIcon />
                            </div>
                        </div>

                        <div className='label'>
                            <input className='data' type='text' disabled placeholder={lastName} />
                            <div className='icon'> </div>
                        </div>

                        <div className='label'>
                            <input className='data' type='email' disabled placeholder={mail} />
                            <div className='icon'> </div>
                        </div>

                        <div className='label'>
                            <input className='data' type='password' disabled placeholder={password} />
                            <div className='icon'> </div>
                        </div>

                        <div className='label'>
                            <input className='data' type='text' disabled placeholder={building} />
                            <div className='icon'> </div>
                        </div>
                        <div className='label'>
                            <input className='data' type='text' disabled placeholder={role} />
                            <div className='icon'> </div>
                        </div>
                        <div className='label'>
                            <input className='data' type='tel' disabled placeholder={phone} />
                            <div className='icon'> <Button /> </div>
                        </div>


                    </div>


                </div>

            </div>
        </Dialog>
    )
}
export default Profile;