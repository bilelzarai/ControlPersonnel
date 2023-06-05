import { useState } from 'react';
import './sign-up.scss';
const SignUp = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const candidate =[firstName,lastName]
    console.log("candidate", candidate);
    return (
        <>
            {candidate}

            <form className="form">
                <p className="title">Register </p>
                <p className="message">Add new employee </p>
                <div className="flex">
                    <label>
                        <span> First name</span>
                        <input className="input" type="text" required="" placeholder="" onChange={e => setFirstName(e.target.value)} />
                    </label>

                    {/* <label>
                        <span></span>
                        <input className="input" type="text" required="" placeholder="" />
                    </label>    */}
                    <label>
                        <span>Last name</span>
                        <input className="input" type="text" required="" placeholder="" onChange={e => setLastName(e.target.value)} />
                    </label>
                </div>

                <label>
                    <input required="" placeholder="Email" type="email" className="input" onChange={e => setEmail(e.target.value)} />
                    <span></span>
                </label>

                <label>
                    <input required="" placeholder="Password" type="password" className="input" onChange={e => setPassword(e.target.value)} />
                    <span></span>
                </label>
                <label>
                    <input required="" placeholder="Confirm password" type="password" className="input" onChange={e => setRePassword(e.target.value)} />
                    <span></span>
                </label>
                <button className="submit" disabled={!firstName || !lastName || !email || !password || !rePassword ? true : false} >

                    Submit

                </button>
                <p className="signin">Already have an acount ? <a href=" ">Signin</a> </p>
            </form >
        </>
    )
}
export default SignUp;