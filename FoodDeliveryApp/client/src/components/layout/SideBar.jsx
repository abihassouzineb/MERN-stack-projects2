import { useContext } from "react";
import { logo } from "../../assets/All";
import {
  FaBars,
  FaSearch,
  FaHome,
  FaUtensils,
  FaStore,
  FaCalendar,
  FaSignOutAlt,
} from "react-icons/fa";
import { FoodAppContext } from "../../context/FoodAppContext";

export default function SideBar() {
  const { sideBarOpen, toggleSideBar } = useContext(FoodAppContext);

  // Define icon sizes based on sidebar state
  const iconSize = sideBarOpen ? 24 : 22; // Larger size when closed

  return (
    <aside
      className={`flex flex-col h-screen fixed top-0 mt-20 bg-white justify-between px-4 items-center border-r-2 border-green-500 ${
        sideBarOpen ? "w-64 pb-[59px]" : "w-[90px] pb-[155px]"
      }`}
    >
      <div className="flex flex-row w-full justify-between items-center p-4">
        <FaBars
          className="text-green-500 cursor-pointer"
          onClick={toggleSideBar}
          size={iconSize} // Use dynamic size
        />
        {sideBarOpen && <img src={logo} alt="logo" className="w-16" />}
      </div>

      <div className="relative w-full">
        {sideBarOpen ? (
          <>
            <input
              type="text"
              placeholder="Search"
              className="w-full border-2 border-green-500 rounded-full px-8 py-2"
            />
            <FaSearch
              className="absolute text-green-500 right-14 top-[14px]"
              size={iconSize}
            />
          </>
        ) : null}
      </div>

      <div className="flex text-green-500 hover:text-white flex-row justify-start gap-x-6 hover:bg-green-500 duration-300 my-2 w-full rounded-full items-center p-4">
        <FaHome size={iconSize} className="pl-[3px]" />
        {sideBarOpen && <p className="font-medium text-md">Home</p>}
      </div>

      <div className="flex text-green-500 hover:text-white flex-row justify-start gap-x-6 hover:bg-green-500 duration-300 my-2 w-full rounded-full items-center p-4">
        <FaUtensils size={iconSize} className="pl-[3px]" />
        {sideBarOpen && <p className="font-medium text-md">Recipes</p>}
      </div>

      <div className="flex text-green-500 hover:text-white flex-row justify-start gap-x-6 hover:bg-green-500 duration-300 my-2 w-full rounded-full items-center p-4">
        <FaStore size={iconSize} className="pl-[3px]" />
        {sideBarOpen && <p className="font-medium text-md">Restaurants</p>}
      </div>

      <div className="flex text-green-500 hover:text-white flex-row justify-start gap-x-6 hover:bg-green-500 duration-300 my-2 w-full rounded-full items-center p-4">
        <FaCalendar size={iconSize} className="pl-[3px]" />
        {sideBarOpen && <p className="font-medium text-md">Meal Planner</p>}
      </div>

      <div
        onClick={toggleSideBar}
        className="flex text-white flex-row justify-start gap-x-6 bg-green-500 duration-300 my-2 w-full rounded-full items-center p-4"
      >
        <FaSignOutAlt size={iconSize} className="pl-[3px]" />
        {sideBarOpen && <p className="font-medium text-md">Logout</p>}
      </div>
    </aside>
  );
}
