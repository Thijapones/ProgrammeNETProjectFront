import React from "react";

// core components
import GymGeneralNavbar from "components/Navbars/GymGeneralNavbar.js";
import AdminLandingPageHeader from "components/GymViews/AdminLandingPageHeader.js";

function AdminLandingPage() {
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
      <AdminLandingPageHeader />
    </>
  );
}

export default AdminLandingPage;
