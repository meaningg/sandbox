import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Links.scss";
import Fade from "react-reveal/Fade";

function Links({ linksArray }) {
  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "auto",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const scrollRef = useHorizontalScroll();
  return (
    <div className="Links__container">
      <div ref={scrollRef} className="Links__slider">
        <div className="Links__more noselect">
          Show more <FontAwesomeIcon icon={faArrowRight} />
        </div>
        {linksArray.map((doc) => (
          <Fade key={doc.id.toString()} delay={getRandomInt(300)}>
            <Link to={doc.link}>
              <div className="link noselect">
                <img className="link__img" src={doc.img} alt="" />

                <div className="link__title">{doc.name}</div>
                <div className="link__text">{doc.description}</div>
              </div>
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default Links;
