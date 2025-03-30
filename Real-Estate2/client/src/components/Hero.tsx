import Hero_img from "../assets/what-is-a-hero-shot-in-real-estate-photography.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="flex flex-row justify-between items-center px-16 py-10">
      <div className="flex flex-col justify-center items-start gap-y-6">
        <h1 className="text-4xl font-bold border-b-2 border-l-2 pl-3 rounded-bl-2xl px-3 border-blue-600 pb-2">
          Find Your <span className="text-blue-600">Dream</span> Home Today
        </h1>
        <p className="text-lg text-blue-500">
          Our Website is the perfect place to find the perfect home for you,
          whether you're looking for a new place to live, a place to sell, or a
          place to rent, we've got you covered.
        </p>

        <Link to="/listings">
          <button className="btn">Get Started</button>
        </Link>
      </div>

      {/* image */}
      <img
        src={Hero_img}
        alt="hero"
        className="size-[52%] pl-6 rounded-t-[18rem]"
      />
    </header>
  );
}
