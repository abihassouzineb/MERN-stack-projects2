import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-6 mb-14 gap-x-6 px-6">
      <img
        src={assets.about_img}
        alt="about"
        className="w-full md:w-[43%] rounded-lg shadow-lg"
      />
      <div className="max-w-[50%]">
        <h1 className="text-4xl flex gap-x-2 mb-6 ml-8">
          <span className="text-[#374151]">ABOUT</span>
          <span>US</span>
          <span>-------</span>
        </h1>
        <p className="text-[#374151] text-left md:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          quos, maiores doloribus ab eum atque est inventore eos hic quia
          deserunt assumenda libero! Dicta quos qui fugiat nulla? Consequuntur,
          maiores. Sequi, eum consectetur! Iste provident minus quam assumenda,
          esse temporibus, maxime voluptatum fuga vero repudiandae architecto,
          sed nihil dolore. Ratione, modi. Non sit quisquam, cum est totam autem
          error deserunt.
        </p>
      </div>
    </section>
  );
}
