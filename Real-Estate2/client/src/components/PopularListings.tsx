import { useContext } from "react";
import { EstateAppContext } from "../context/EstateAppContext";

export default function PopularListings() {
  const context = useContext(EstateAppContext);
  if (!context) {
    return <div>Error: Context not found</div>;
  }
  const { listings } = context;

  return (
    <section className="flex flex-col justify-center items-center px-16 py-10">
      <h1 className="text-4xl font-bold border-b-2 border-blue-500 pb-2 px-5">
        Discover Popular Listings
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {listings.slice(0, 3).map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{listing.title}</h2>
              <p className="text-gray-600">{listing.address}</p>
              <p className="text-gray-600">
                {listing.city}, {listing.state} {listing.zipcode}
              </p>
              <p className="text-gray-600">${listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
