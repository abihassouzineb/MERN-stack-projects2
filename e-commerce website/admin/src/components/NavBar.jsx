import admin_nav_logo from "../assets/Assets/Admin_Assets/nav-logo.svg";
import admin_nav_profile from "../assets/Assets/Admin_Assets/nav-profile.svg";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-2 border-b-2 border-orange-400" >
      <img src={admin_nav_logo} alt="" />
      <img src={admin_nav_profile} alt="" />
    </nav>
  );
};

export default NavBar;
