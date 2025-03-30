import { assets } from "../assets/forever-assets/assets/frontend_assets/assets"
export default function Features() {
  return (
    <section className="flex flex-row justify-between items-baseline my-20 mx-20">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <img src={assets.exchange_icon} alt="exchange" />
        <p className="text-gray-800 font-medium text-lg">
          Easy Exchange Policy
        </p>
        <p className="pb-2 font-medium text-sm text-[#3e4858]">
          We offer hassle free exchange policy
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-3">
        <img src={assets.quality_icon} alt="exchange" />
        <p className="text-gray-800 font-medium text-lg">
          7 Days Return Policy
        </p>
        <p className="pb-2 font-medium text-sm text-[#3e4858]">
          We provide 7 days free return policy
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-3">
        <img src={assets.support_img} alt="exchange" />
        <p className="text-gray-800 font-medium text-lg">
          Best customer support
        </p>
        <p className="pb-2 font-medium text-sm text-[#3e4858]">
          we provide 24/7 customer support
        </p>
      </div>
    </section>
  );
}
