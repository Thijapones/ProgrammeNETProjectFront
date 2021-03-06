import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGSpotList from "components/MTGViews/MTGSpotList.js"


function MTGSpots(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <MTGSpotList {...props} handleSpotId={props.handleSpotId} />
    </>
  );
}

export default MTGSpots;
