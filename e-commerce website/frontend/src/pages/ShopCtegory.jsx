import React from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Items";

function ShopCategory(category) {
  const { all_product } = React.useContext(ShopContext);
  return (
    <div>
      <img src={category.banner} alt="" />

      <div className="grid my-10 mx-11 grid-cols-4 gap-4 gap-y-11">
        {all_product
          .filter((item) => item.category === category.category)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default ShopCategory;
