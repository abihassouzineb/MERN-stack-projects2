import { assets } from "../assets/forever-assets/assets/frontend_assets/assets"

export default function Header() {
  return (
    <header className="grid grid-cols-2 gap-10 text-[#374151]  border border-gray-500 mx-10 my-2">
      <div className="flex font-medium flex-col gap-y-4 justify-center items-start pl-24">
        <p className="flex gap-x-2">
          <span>---------</span>
          <span>OUR BESTSELLERS</span>
        </p>

        <h1 className="text-6xl">Latest Arrivals</h1>

        <p className="flex gap-x-2">
          <span>SHOP NOW</span>
          <span>---------</span>
        </p>
      </div>

      <img src={assets.hero_img} alt="hero" className="" />
    </header>
  );
}
