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
function Chat() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="container__chat">
      <Fade duration={300} delay={getRandomInt(700)}>
        <div className="chatsList">
          <div className="chatsList__item chatsList__item_choosen">
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
            <FontAwesomeIcon className="sideBar__button_icon" icon={faPlus} />
          </div>
          <div className="sideBar__button">
            <FontAwesomeIcon
              className="sideBar__button_icon"
              icon={faSignInAlt}
            />
          </div>
          <div className="sideBar__button">
            <FontAwesomeIcon className="sideBar__button_icon" icon={faCog} />
          </div>
          <Link to="/">
            <div className="sideBar__button">
              <FontAwesomeIcon
                className="sideBar__button_icon"
                icon={faPowerOff}
              />
            </div>
          </Link>
        </div>
      </Fade>
    </div>
  );
}

export default Chat;
