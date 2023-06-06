import { useState } from 'react';
import './form.scss';
import { Button } from 'react-md';
const Sign = (
   {
    titleForm, 
    title,
    setTitle,
    btnName, 
    btnDescription,
    // candidate,
    // setCandidate,
    }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    // const [form, setForm] = useState(false)

    const candidate =[firstName,lastName,email,password]

    const disableInput = () => { return (title = 'Register' ? firstName && lastName && email && password && rePassword === password: email && password) }
    // const resetCandidate =()=>{candidate[1] === setFirstName("") ,candidate[2] === setLastName("")}
console.log(candidate,"cccc");
    return (
        <>
            {/* {candidate} */}

            <form className="form">
                <p className="title">{title}  </p>

                <p className="message">{titleForm} </p>

               { title === "Register" &&
                <div className="flex">
                    <label>
                        <span> First name</span>
                        <input className="input" type="text" required placeholder="" onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label>
                        <span>Last name</span>
                        <input className="input" type="text" required placeholder="" onChange={e => setLastName(e.target.value)} />
                    </label>
                </div>}

                <label>
                    <input required placeholder="Email" type="email" className="input" onChange={e => setEmail(e.target.value)} />
                    <span></span>
                </label>

                <label>
                    <input required placeholder="Password" type="password" className="input" onChange={e => setPassword(e.target.value)} />
                    <span></span>
                </label>
                { title === "Register" &&
                <label>
                    <input required placeholder="Confirm password" type="password" className="input" onChange={e => setRePassword(e.target.value)} />
                    <span></span>
                </label>
                }
                <button className="submit" disabled={!disableInput()}  
                // onClick={()=> setCandidate({title, firstName, email, password, rePassword })}
                >

                    {btnName}

                </button>
                { title === "Register" 

               ? <p className="signin" > {btnDescription} <Button onClick={()=>title = "Register"}>{title === "Register" ?  "SignUp" :"SignIn"}</Button> </p>
               : <p className="signin" > {btnDescription} <Button onClick={()=>setTitle("Login")}>{title === "Register" ?  "SignUp" :"SignIn"}</Button> </p>

                 }
            </form >
        </>
    )
}
export default Sign;