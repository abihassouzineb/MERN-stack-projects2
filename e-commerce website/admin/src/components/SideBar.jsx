import { Link } from "react-router-dom";
// importing the cart icon from react icons
import { FaShoppingCart } from "react-icons/fa";
// importing the list product icon from react icons
import { FaList } from "react-icons/fa";

const SideBar = () => {
  const ExpandSideBar = () => {
    const sidebar = document.querySelector("aside");
    sidebar.classList.toggle("hidden");
  };
  return (
    <>
      <aside className="flex fixed top-24 flex-col w-1/6 py-6 px-4 bg-white shadow-md h-full space-y-10">
        <Link to="/addproduct">
          <div className="flex bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-lg flex-row space-x-2">
            <FaShoppingCart size={25} />
            <span>Add Product</span>
          </div>
        </Link>

        <Link to="/listproduct">
          <div className="flex relative bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-lg flex-row space-x-2">
            <FaList size={25} />
            <span>Products</span>
          </div>
        </Link>
      </aside>

      <button
        className="rounded-full px-4 py-2 fixed bottom-6 right-0 border w-fit border-gray-400"
        onClick={ExpandSideBar}
      >
        {">"}
      </button>
    </>
  );
};

export default SideBar;
