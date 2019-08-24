import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function GymLandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/Programmers/Gym/GymWall.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Gymnious App</h1>
            <h3>You lift the weight. We carry the burden.</h3>
            <br />
            <Link to="/AthleteLandingPage">
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              I'm an athlete
            </Button>
            </Link>
            <Link to="/TrainerLandingPage">
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              I'm a trainer
            </Button>
            </Link>
            <Link to="/AdminLandingPage">
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              I'm an admin
            </Button>
            </Link>
          </div>
        </Container>
      </div>
      <div className="footer register-footer text-center">
          <h6>© {new Date().getFullYear()}, Powered by NumSay.</h6>
    </div>
    </>
  );
}

export default GymLandingPageHeader;
