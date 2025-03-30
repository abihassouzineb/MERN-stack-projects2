import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EstateAppContext } from "../context/EstateAppContext";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function ListingDetails() {
  const context = useContext(EstateAppContext);
  const { listingId } = useParams();

  if (!context)
    return (
      <div className="text-red-500 text-center mt-10">
        Error: Context not found
      </div>
    );

  // Function to replace 'sqft' with 'ft²'
  const replaceSqft = (text: string) => {
    return text.replace(/sqft/g, "ft²");
  };

  const { listings } = context;
  const listing = listings.find(
    (listing) => listing.id.toString() === listingId
  );

  if (!listing)
    return (
      <div className="text-center text-gray-600 mt-10">Listing not found</div>
    );

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Listing Image */}
      <motion.img
        src={listing.image}
        alt={listing.title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      />

      {/* Listing Title & Address */}
      <h1 className="text-3xl font-bold mt-4">{listing.title}</h1>
      <p className="text-gray-600 mt-2">
        {listing.address}, {listing.city}, {listing.state}, {listing.zipcode}
      </p>

      {/* Listing Details */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-lg">
        <p>
          <span className="font-semibold">Price:</span> ${listing.price}
        </p>
        <p>
          <span className="font-semibold">Bedrooms:</span> {listing.bedrooms}
        </p>
        <p>
          <span className="font-semibold">Bathrooms:</span> {listing.bathrooms}
        </p>
        <p>
          <span className="font-semibold">Square Feet:</span>{" "}
          {listing.square_feet} {replaceSqft("sqft")}
        </p>
      </div>

      {/* Interactive Map */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Location</h2>
        <MapContainer
          center={[listing.lat, listing.lng] as [number, number]} // Use real coordinates
          zoom={13}
          style={{ height: "300px", width: "100%", borderRadius: "10px" }}
          className="shadow-md"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[listing.lat, listing.lng]}>
            <Popup>{listing.title}</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Contact Agent Button */}
      <motion.button
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Agent
      </motion.button>
    </motion.div>
  );
}
