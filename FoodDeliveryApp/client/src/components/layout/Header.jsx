import { header_img } from "../../assets/All";


export default function Header() {


  return (
    <header className={`flex flex-row overflow-hidden justify-between items-center px-16 py-10 bg-gradient-to-r w-screen from-green-100 to-green-50`}>
      {/* Left Section: Description */}
      <div className="flex flex-col gap-6 max-w-lg">
        <h1 className="text-5xl leading-tight font-bold text-green-900">
          Delicious Food Delivered to Your Doorstep
        </h1>
        <p className="text-lg text-green-700">
          Explore a wide variety of cuisines, from local favorites to
          international delights. Order now and enjoy fresh, hot meals in no
          time!
        </p>

        <a href="#" id="btn">
          Order Now
        </a>
      </div>

      {/* Right Section: Header Image */}
      <img
        src={header_img}
        alt="header"
        className={` w-1/2 mb-10 rounded-lg shadow-2xl shadow-green-400 `}
      />
    </header>
  );
}
