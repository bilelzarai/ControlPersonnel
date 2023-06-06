import { useState } from "react";
import "./App.scss";
import SignSr from "./components/form/form";
// import ConfirmDialog from "./components/dialog-confirm/confirm";
// import SignUp from "./components/sign/sign-up/sign-up";
function App() {
  const [title, setTitle] = useState("Register")
  // const [candidate, setCandidate] = useState ({})

  return (
    <>
{title === "Register" ?
  <SignSr      
      
      titleForm ={"Add new employee"} 
      title ={title}
      setTitle={()=>setTitle("Login") }
      btnName = {"Submit"} 
      btnDescription={"Already have an acount ?"}    
      // candidate={candidate}
      // setCandidate={setCandidate}
      /> 
    :
   <SignSr      
      
    titleForm ={"Welcome"} 
    title ={title}
    btnName = {"Login"} 
    btnDescription={"Create an acount ?"}    
    setTitle={()=>setTitle("Register") }
    // candidate={candidate}
    // setCandidate={setCandidate}
    />  
    }
    
    {/* <SignUp/> */}
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
