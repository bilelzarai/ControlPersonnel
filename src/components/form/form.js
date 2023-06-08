import { useState } from 'react';
import './form.scss';
import { Button } from 'react-md';
// import ConfirmDialog from '../dialog-confirm/confirm';
import DialogInformation from '../dialog-information/dialog-information';
import MailIcon from '@mui/icons-material/Mail';
import DialogConfirmRect from '../dialog-confirm-rect/dialog-confirm-rect';

const Sign = (
    {
        titleForm,
        title,
        setTitle,
        btnName,
        btnDescription,
        signButton,
        log,
        // candidate,
        // setCandidate,
    }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const d = new Date();

    // const [form, setForm] = useState(false)

    // const candidate = [firstName, lastName, email, password]
    // const [toast, setToast] = useState(false)

    const disableInput = () => { return (title = 'Register' ? firstName && lastName && email && password && rePassword === password : email && password) }
    // const resetCandidate =()=>{candidate[1] === setFirstName("") ,candidate[2] === setLastName("")}
    const forget=()=>{ console.log("forgetMsg","ffff");}
    console.log(log, "cccc");
    return (
        <>

            {/* {candidate} */}
            <form className="form">
            { d.toLocaleTimeString()+"  "+ d.toLocaleDateString()}

                <p className="title">{title}  </p>

                <p className="message">{titleForm} </p>

                {title === "Register" &&
                    <div className="flex">
                     
                        <div className='twoPart'>
                        <label>
                            <span>Last name</span>
                            <input className="input" type="text" required placeholder="" onChange={e => setFirstName(e.target.value)} />
                        </label>
                        </div> <div className='twoPart'>
                        <label>
                            <span>Last name</span>
                            <input className="input" type="text" required placeholder="" onChange={e => setLastName(e.target.value)} />
                        </label>
                        </div>
                    </div>}

                <label>
                    <input required placeholder="Email" type="email" className="input" onChange={e => setEmail(e.target.value)} />
                    <span></span>
                </label>

                <label>
                    <input required placeholder="Password" type="password" className="input" onChange={e => setPassword(e.target.value)} />
                    <span></span>
                </label>
                {title === "Register" &&
                    <label>
                        <input required placeholder="Confirm password" type="password" className="input" onChange={e => setRePassword(e.target.value)} />
                        <span></span>
                    </label>
                }
                {title !== "Register" &&
                        <div className='flex'>
                            <div className='twoPart'>
                                <label>
                                    <input type="checkbox" name="rememberMe" defaultChecked={false} /> Remember for 30 Days
                                </label>
                            </div>
                            <div className='buttonClass'><button className='button' onClick={()=>forget()}>Forgot password</button></div>

                        </div>

                }

                <button className="submit" disabled={!disableInput()}
                // onClick={()=> setCandidate({title, firstName, email, password, rePassword })}
                >
                    {btnName}

                </button>

                    <p className="signin" > {btnDescription} <Button onClick={() => setTitle("Login")}>{signButton}</Button> </p>
                



            </form >
            {/* <ConfirmDialog visible={true} title={'Reset your password'}
             description ={'the post will be displayed to the public once it passes the vetting team'} 
            // imgCard ={'completedIcon'}
             /> */} 
             
             {/* <DialogInformation 
             visible={true} 
             title={'Please check your mail'}
             description ={' We have sent a link of reset password to your email.'} 
             icon={<MailIcon sx={{ fontSize: "50px" }} />}

             /> */}
             {/* <DialogInformation
              visible={true}
              onHide={false}
              title={'Please check your mail'}
                icon={<MailIcon sx={{ fontSize: "50px" }} />}
            description={"Your password has been reset."}
            link={"Please click here to log in"}
            skip={'Skip, I’ll log in later'}
              /> */}
               <DialogConfirmRect
             visible={true} 
             disable={false} 
             
             title={'Please check your mail'}
             description ={' We have sent a link of reset password to your email.'} 
             icon={<MailIcon sx={{ fontSize: "50px" }} />}

             />

           
        </>
    )
}
export default Sign;