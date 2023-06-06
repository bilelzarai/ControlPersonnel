import { useState } from "react";
import "./App.scss";
import SignSr from "./components/form/form";
// import ConfirmDialog from "./components/dialog-confirm/confirm";
// import SignUp from "./components/sign/sign-up/sign-up";
function App() {
  const [signIn, setSignIn] = useState("SignIn")
  const [candidate, setCandidate] = useState ({})

  return (
    <>

  <SignSr      
      
      titleForm ={"Add new employee"} 
      title ={"Register"}
      btnName = {"Submit"} 
      btnDescription={"Already have an acount ?"}    
      signIn={signIn}
      setSign={()=>setSignIn("SignUp") }
      candidate={candidate}
      setCandidate={setCandidate}
      /> 
    
   {/* <SignSr      
      
    titleForm ={"Welcome"} 
    title ={"Login"}
    btnName = {"Login"} 
    btnDescription={"Create an acount ?"}    
    signIn={signIn}
    setSign={()=>setSignIn("SignUp") }
    candidate={candidate}
    setCandidate={setCandidate}
    />  */}
    
    
{/* <button onClick={()=>{setConfirm(false)}}> popup</button> */}
      {/* {confirm && (
        <ConfirmDialog
          visible={confirm}
          close={() => {
            setConfirm(false)
          }}
          title="Confirm"
          desc="this is popup"

        />
      )
      } */}

    </>




    // <div className="App">
    //   <header className="App-header">
    //     <p>This is the First commit of your new project</p>
    //   </header>
    // </div>
  );
}

export default App;
