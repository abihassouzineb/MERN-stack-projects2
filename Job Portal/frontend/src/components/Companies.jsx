import { assets } from "../assets/Job-Portal-Assets/assets/assets";

export default function Companies() {
  return (
    <div className="flex flex-row ring-2 ring-gray-400 justify-center items-center space-x-8 py-4 mx-7 rounded-md">
      <p className="font-semibold border-b-2 border-blue-400 pb-1 mt-2">Trusted by</p>
      <img className="w-24" src={assets.microsoft_logo} alt="" />
      <img className="w-24" src={assets.walmart_logo} alt="" />
      <img className="w-24" src={assets.accenture_logo} alt="" />
      <img className="w-24" src={assets.samsung_logo} alt="" />
      <img className="w-24" src={assets.amazon_logo} alt="" />
      <img className="w-24" src={assets.adobe_logo} alt="" />
    </div>
  );
}
