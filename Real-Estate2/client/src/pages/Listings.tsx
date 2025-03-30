/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { EstateAppContext } from "../context/EstateAppContext";
import { Link } from "react-router-dom";

export default function Listings() {
  const context = useContext(EstateAppContext);
  if (!context) return <div>Error: Context not found</div>;

  const { listings } = context;
  const [filteredListings, setFilteredListings] = useState(listings);

  // Handling search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const results = listings.filter((listing) =>
      listing.title.toLowerCase().includes(query)
    );
    setFilteredListings(results);
  };

  // Handling filtering
  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    let sortedListings = [...filteredListings];

    if (filter === "price-low-to-high") {
      sortedListings.sort((a, b) => a.price - b.price);
    } else if (filter === "price-high-to-low") {
      sortedListings.sort((a, b) => b.price - a.price);
    } else {
      // Reset to original listings if "All" is selected
      sortedListings = listings;
    }

    setFilteredListings(sortedListings);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-4xl font-bold border-b-2 border-blue-500 pb-2 px-5">
        Listings
      </h1>
      <section className="flex flex-row justify-center items-start py-10 gap-x-10">
        {/* Searching and filtering */}
        <div className="flex flex-col justify-center items-start gap-y-5">
          <div className="flex flex-row gap-2 px-5 py-3 border border-black justify-center items-center">
            <label htmlFor="search">Search:</label>
            <input
              onChange={handleSearch}
              placeholder="Search by title"
              type="text"
              id="search"
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </div>

          <div className="flex flex-row gap-2 px-5 py-3 border border-black justify-center items-center">
            <label htmlFor="filter">Sort By:</label>
            <select
              id="filter"
              onChange={handleFilter}
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="all">All</option>
              <option value="price-low-to-high">Lowest to Highest</option>
              <option value="price-high-to-low">Highest to Lowest</option>
            </select>
          </div>
        </div>

        {/* Listings */}
        <div className="grid grid-cols-2 gap-14">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="relative flex w-96 flex-col rounded-xl bg-white text-gray-700 shadow-md"
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-semibold">{listing.title}</h5>
                <p className="text-base font-light">{listing.address}</p>
              </div>
              <div className="p-6 pt-0">
                <Link to={`/listings/${listing.id}`}>
                <button
                  type="button"
                  className="rounded-lg bg-blue-500 py-3 px-6 text-white shadow-md transition hover:shadow-lg focus:opacity-85 active:opacity-85"
                > 
                  View Listing
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
