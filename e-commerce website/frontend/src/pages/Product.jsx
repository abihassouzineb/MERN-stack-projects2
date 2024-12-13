import BreadCrums from "../components/BreadCrums";
import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay";

function Product() {
      const { all_product } = React.useContext(ShopContext);
      const { productId } = useParams();
      const product = all_product.find((item) => item.id === Number(productId));
      return (
            <div className="flex flex-col h-screen mx-10 my-11 space-y-10">
                  <BreadCrums product={product} />
                  <ProductDisplay product={product} />
            </div>
      );
}

export default Product;