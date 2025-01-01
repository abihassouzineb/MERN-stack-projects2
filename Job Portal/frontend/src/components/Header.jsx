import { useContext, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef();

  const [search, setSearch] = useState("");

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
    });
    console.log(titleRef.current.value);
    setIsSearched(true);
    setSearch("");
  };

  return (
    <header className="bg-gradient-to-r from-purple-800 mx-6 my-10 to-purple-950 rounded-lg py-10">
      <div className="text-center text-white space-y-5">
        <h1 className="text-4xl font-bold">Over 10,000+ jobs to apply</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>
      </div>

      <div className="flex justify-center items-center mt-5">
        <div className="relative w-full max-w-md">
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            ref={titleRef}
            type="text"
            placeholder="Search for Jobs"
            className="w-full px-4 py-2 rounded-sm text-black pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <button
            onClick={onSearch}
            className="absolute right-0 top-0 h-full bg-sky-400 text-white px-5 py-2 rounded-sm  hover:bg-gray-500"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
