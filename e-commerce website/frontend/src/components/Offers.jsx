import offers_img from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/exclusive_image.png";

function Offers() {
  return (
    <div className="flex my-10 mx-20 flex-row justify-center space-x-44 items-center py-12  bg-gradient-to-b from-red-300 to-white">
      <div className="flex items-start flex-col space-y-4">
        <p className="font-medium text-6xl leading-relaxed">
          Exlusive <br /> Offers for you
        </p>
        <p className="uppercase">Only on best sellers products</p>
        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-full flex justify-center items-center space-x-3">
          Check now
        </button>
      </div>

      <img src={offers_img} alt="offers_img" className="w-1/4" />
    </div>
  );
}

export default Offers;
