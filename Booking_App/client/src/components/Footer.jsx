import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row my-5 justify-between items-baseline">
        <div className="flex flex-col gap-y-4 justify-center items-start">
          <img src={assets.logo} alt="logo" className="w-36" />
          <p className="text-[#374151] text-sm max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex flex-col gap-y-4 justify-center items-start">
          <p className="font-medium text-gray-800 text-xl mb-5 border-b-2 pb-1">
            Company
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-[#374151] text-sm">About Us</p>
            <p className="text-[#374151] text-sm">Contact Us</p>
            <p className="text-[#374151] text-sm">Privacy Policy</p>
            <p className="text-[#374151] text-sm">Terms & Conditions</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 justify-center items-start">
          <p className="font-medium text-gray-800 border-b-2 pb-1 text-xl mb-5 ">
            GET IN TOUCH
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-[#374151] text-sm">Morocco.Settat.2221</p>
            <p className="text-[#374151] text-sm">LoremIpsum@gmail.com</p>
            <p className="text-[#374151] text-sm">+100 000 0000</p>
          </div>
        </div>
      </footer>

      <p className="text-center my-5 text-gray-800 text-md">
        <hr className="mx-32 text-[#374151] mb-5" />
        <p>
          Copyright {new Date().getFullYear()} @ Saad.dev - All Right Reserved.
        </p>
      </p>
    </>
  );
}
