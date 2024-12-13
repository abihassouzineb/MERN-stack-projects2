import hero from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/hero_image.png";
import hi from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/hand_icon.png";
import right_arrow from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/arrow.png"

function Hero() {
  return (
    <section className="flex flex-row justify-between items-center px-32 py-6 bg-gradient-to-b from-red-400 to-white">
      <div className="flex space-y-6 flex-col justify-center items-start">
        <p className="font-semibold text-2xl">NEW ARRIVALS ONLY</p>
        <p className="font-semibold flex justify-center items-start flex-col text-6xl">
          <div className="flex justify-center items-center space-x-2">
            <p>New</p>
            <img src={hi} alt="hi" className="w-20" />
          </div>
          
          <p>
            Collection <br /> for everyone
          </p>
        </p>
                    <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-full flex justify-center items-center space-x-3">
                          <p>Latest Collections</p>
                          <img src={right_arrow} alt="right_arrow" className="w-4" />
        </button>
      </div>
      <img src={hero} alt="hero" className="w-1/3" />
    </section>
  );
}

export default Hero;
