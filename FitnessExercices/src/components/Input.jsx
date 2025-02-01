import { useContext } from "react";
import { GymAppContext } from "../context/GymAppContext";

export default function Input() {
  const { filterBySearchTerm } = useContext(GymAppContext);

  const handleSearch = (e) => {
    filterBySearchTerm(e.target.value);
  };

  return (
    <section className="flex flex-col my-10 justify-center items-center gap-y-8">
      <p className="text-4xl font-medium border-b-2 border-orange-500 pb-2 px-10">
        Awesome Exercices You Should Try
      </p>

      <div className="input-container">
        <input
          onChange={handleSearch}
          type="text"
          name="text"
          className="input"
          placeholder="search..."
        ></input>
        <span className="icon" onClick={handleSearch}>
          <svg
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="1"
                d="M14 5H20"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                opacity="1"
                d="M14 8H17"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                opacity="1"
                d="M22 22L20 20"
                stroke="#000"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </div>
    </section>
  );
}
