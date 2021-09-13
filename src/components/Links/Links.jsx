import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Links.scss";

function Links({ linksArray }) {
  return (
    <div className="Links__container">
      <div className="Links__slider">
        <div className="Links__more noselect">
          Show more <FontAwesomeIcon icon={faArrowRight} />
        </div>
        {linksArray.map((doc) => (
          <Link to="/post">
            <div className="link noselect">
              <img className="link__img" src={doc.img} alt="" />

              <div className="link__title">{doc.name}</div>
              <div className="link__text">{doc.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Links;