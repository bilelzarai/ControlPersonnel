// import { useState } from "react";
import "./App.scss";
import EditProfileEmployer from "./components/edit-profile-employer/edit-profile-employer";
// import Sign from "./components/form/form";
// import ListAllRequest from "./components/list-all-request/list-all-request";
import WeWillBackSoon from "./components/we-will-back-soon";
// import ConfirmDialog from "./components/dialog-confirm/confirm";
// import SignUp from "./components/sign/sign-up/sign-up";
function App() {
  // const [title, setTitle] = useState("Register");
  // const [signButtom, setSignButtom] = useState("SIGNUP");
  return (
    // <>
    //   {/* {title === "Register" ? (
    //     <Sign
    //       titleForm={"Add new employee"}
    //       title={title}
    //       setTitle={() => setTitle("Welcome back")}
    //       btnName={"Submit"}
    //       btnDescription={"Already have an acount ?"}
    //       signButton={"SignIn"}
    //       log="1"
    //       // candidate={candidate}
    //       // setCandidate={setCandidate}
    //     />
    //   ) : (
    //     <Sign
    //       titleForm={"Welcome back! Please enter your details"}
    //       title={title}
    //       btnName={"Login"}
    //       btnDescription={"Create an acount ?"}
    //       setTitle={() => setTitle("Register")}
    //       signButton={"SignUp"}
    //       log="2"

    //       // candidate={candidate}
    //       // setCandidate={setCandidate}
    //     />
    //   )} */}

    //   {/* <SignUp/> */}
    //   {/* <button onClick={()=>{setConfirm(false)}}> popup</button> */}
    //   {/* {confirm && (
    //         <ConfirmDialog
    //           visible={confirm}
    //           close={() => {
    //             setConfirm(false)
    //           }}
    //           title="Confirm"
    //           desc="this is popup"

    //         />
    //       )
    //       } */}
    // </>

    <>
      {/* <ListAllRequest /> */}
      <EditProfileEmployer/>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <p>This is the First commit of your new project</p>
    //   </header>
    // </div>
  );
}

export default App;
