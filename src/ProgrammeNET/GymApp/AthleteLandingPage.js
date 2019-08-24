import React from "react";

// core components
import GymGeneralNavbar from "components/Navbars/GymGeneralNavbar.js";
import AthleteLandingPageHeader from "components/GymViews/AthleteLandingPageHeader.js";

function AthleteLandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <GymGeneralNavbar />
      <AthleteLandingPageHeader />
    </>
  );
}

export default AthleteLandingPage;
