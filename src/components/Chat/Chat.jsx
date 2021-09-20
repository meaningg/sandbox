import React from "react";
import "./Chat.scss";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faPlus,
  faPowerOff,
  faSignInAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const auth = firebase.auth();
const db = firebase.firestore();

function Auth() {
  const [user] = useAuthState(auth);
  return user ? <Chat /> : <AuthBox />;
}

function Chat() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="container__chat">
      <Fade duration={300} delay={getRandomInt(700)}>
        <div className="chatsList">
          <div className="chatsList__item chatsList__item_choosen">
            <span>HornyChat active</span>
            <FontAwesomeIcon
              className="chatsList__item_deleteIcon"
              icon={faTrash}
            />
          </div>
          <div className="chatsList__item">
            <span>HornyChat</span>
            <FontAwesomeIcon
              className="chatsList__item_deleteIcon"
              icon={faTrash}
            />
          </div>
          <div className="chatsList__item">
            <span>HornyChat</span>
            <FontAwesomeIcon
              className="chatsList__item_deleteIcon"
              icon={faTrash}
            />
          </div>
          <div className="chatsList__item">
            <span>HornyChat</span>
            <FontAwesomeIcon
              className="chatsList__item_deleteIcon"
              icon={faTrash}
            />
          </div>
        </div>
      </Fade>
      <Fade duration={300} delay={getRandomInt(700)}>
        <div className="chatRoom"></div>
      </Fade>
      <Fade duration={300} delay={getRandomInt(700)}>
        <div className="sideBar">
          <div className="sideBar__button">
            <span>Create a chat room</span>
            <FontAwesomeIcon className="sideBar__icon" icon={faPlus} />
          </div>
          <div className="sideBar__button">
            <span>Enter the chat room</span>
            <FontAwesomeIcon className="sideBar__icon" icon={faSignInAlt} />
          </div>
          <div className="sideBar__button">
            <span>Settings</span>
            <FontAwesomeIcon className="sideBar__icon" icon={faCog} />
          </div>

          <div onClick={() => auth.signOut()} className="sideBar__button">
            <Link to="/">
              <span>Exit</span>
              <FontAwesomeIcon className="sideBar__icon" icon={faPowerOff} />
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}

function AuthBox() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="noselect authBox">
      <span> To use the chat room, you need to log in via</span>{" "}
      <h4 onClick={signInWithGoogle}>
        <FontAwesomeIcon icon={faGoogle} />
        oogle
      </h4>
    </div>
  );
}

export default Auth;
