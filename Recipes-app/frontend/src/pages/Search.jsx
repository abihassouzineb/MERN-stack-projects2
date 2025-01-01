import { useEffect, useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const Search = () => {
  // State to store all estates and filtered estates based on search term or sorting
  const [estates, setEstates] = useState([]);
  const [filteredEstates, setFilteredEstates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch estates from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000")
      .then(response => response.json())
      .then(data => {
        setEstates(data.estates);
        setFilteredEstates(data.estates);
      })
      .catch(err => console.error(err));
  }, []);

  // Filter estates based on the search term
  useEffect(() => {
    const filterBySearchTerm = () => {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = estates.filter(estate =>
        estate.title.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredEstates(filtered);
    };

    filterBySearchTerm();
  }, [searchTerm, estates]);

  // Handle change in the search input field
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sort estates by price
  const sortByPrice = () => {
    // Sort estates by price, explanation : we sort the estates based on their price (lowest to highest)
    const sorted = [...filteredEstates].sort((a, b) => a.price - b.price);
    setFilteredEstates(sorted);
  };

  // Sort estates by location
  const sortByLocation = () => {
    // Sort estates by location, explanation : we sort the estates alphabetically (A-Z)
    const sorted = [...filteredEstates].sort((a, b) => a.location.localeCompare(b.location));
    setFilteredEstates(sorted);
  };

  // Handle change in the sort select field
  const handleSortChange = (e) => {
    if (e.target.value === "price") {
      sortByPrice();
    } else if (e.target.value === "location") {
      sortByLocation();
    }
  };

  return (
    <section className="flex flex-col bg-gray-100 justify-center items-center h-full">
      <form
        action=""
        method="get"
        className="flex flex-col my-9 w-1/4 justify-between items-center px-20 shadow-md shadow-blue-200 bg-[#e2e8f0] py-4"
      >
        <label htmlFor="search-term">Search</label>
        <input
          type="text"
          id="search-term"
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="w-full p-2 rounded-md"
        />

        <label htmlFor="sort-by">Sort:</label>
        <select
          id="sort-by"
          className="w-full p-2 rounded-md"
          onChange={handleSortChange}
        >
          <option value="price">Price</option>
          <option value="location">Location</option>
        </select>
      </form>

      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {filteredEstates.map((estate) => (
          <div
            key={estate._id}
            className="flex flex-col gap-y-2 shadow-md w-[400px] bg-[#e2e8f0] rounded-xl"
          >
            <img
              src={`http://localhost:3000/images/${estate.image}`}
              alt={estate.title}
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#334155]">{estate.title}</p>
              <div className="flex flex-row items-center gap-x-2">
                <FaMapMarkedAlt />
                <p className="text-[#4b5563]">{estate.location}</p>
              </div>
              <p className="text-sm font-light">{estate.description}</p>
              <p className="font-bold">${estate.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
