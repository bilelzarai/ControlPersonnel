// import { useState } from "react";
import "./App.scss";
// import ConfirmDialog from "./components/dialog-confirm/confirm";
import SignUp from "./components/sign/sign-up/sign-up";

function App() {
  // const [confirm, setConfirm] = useState(false)
  return (
    <>
    <SignUp/>
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
