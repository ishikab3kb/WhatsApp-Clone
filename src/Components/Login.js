import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import {signInWithPopup} from "firebase/auth"
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
    //pulling something from data layer using useStateValue
    //first part of the state is something you can destructure and get the user...the second part is dispatch which is like a gun where you put whatever the payload is and you shoot it at the data layer to update the data right there
    const [{},dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth,provider)
      .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png"
          alt="whatsapp-logo"
        ></img>
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
