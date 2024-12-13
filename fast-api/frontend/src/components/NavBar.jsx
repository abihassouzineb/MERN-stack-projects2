// importing students icon from react icons
import { BsPeople } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav className="flex flex-row justify-between items-center bg-red-500 p-4">
      <div className="flex flex-row justify-center items-center gap-5">
        <p className="text-2xl font-bold">School MS</p>
        <BsPeople size={30} />
      </div>

      <div className="flex flex-row justify-center items-center gap-5">
        <p className="text-md hover:ring-2 ring-black duration-300 rounded-lg py-2 px-2 cursor-pointer font-bold" onClick={() => navigate("/add-student")}>Add Student</p>
        <p className="text-md hover:ring-2 ring-black duration-300 rounded-lg py-2 px-2 cursor-pointer font-bold">Delete Student</p>
        <p className="text-md hover:ring-2 ring-black duration-300 rounded-lg py-2 px-2 cursor-pointer font-bold">Update Student</p>
      </div>
    </nav>
  );
};

export default NavBar;
