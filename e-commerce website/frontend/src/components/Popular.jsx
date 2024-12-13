/* eslint-disable react/jsx-no-undef */
import data_product from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/data";
import Item from "./Items";

function Popular() {
  return (
    <div className="flex flex-col py-5 justify-center items-center">
      <p className="border-b-4 pb-5 mb-10 border-black  text-5xl">POPULAR IN MEN!</p>
      <hr />
      <div className="flex flex-row mx-10 space-x-5 justify-between">
        {data_product.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
