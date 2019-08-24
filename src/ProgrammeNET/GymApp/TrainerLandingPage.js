import React from "react";

// core components
import GymGeneralNavbar from "components/Navbars/GymGeneralNavbar.js";
import TrainerLandingPageHeader from "components/GymViews/TrainerLandingPageHeader.js";

function TrainerLandingPage() {
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
      <TrainerLandingPageHeader />
    </>
  );
}

export default TrainerLandingPage;
