import arrow_icon from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/breadcrum_arrow.png";

function BreadCrums({ product }) {
  return (
    <div className="flex flex-row space-x-2">
      HOME <img src={arrow_icon} alt="" className="px-3" /> SHOP{" "}
      <img src={arrow_icon} alt="" className="px-3 " /> {product.name}
    </div>
  );
}

export default BreadCrums;
