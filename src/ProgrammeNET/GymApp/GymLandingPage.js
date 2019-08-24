import React from "react";

// core components
import GymNavbar from "components/Navbars/GymNavbar.js";
import LandingPageHeader from "components/GymViews/GymLandingPageHeader.js";

function GymLandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <GymNavbar />
      <LandingPageHeader />
    </>
  );
}

export default GymLandingPage;
