// importing the stars component from material ui
import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function ProductDisplay({ product }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex flex-row justify-center space-x-10">
      <div>
        <img src={product.image} alt={product.name} />
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="font-medium text-3xl max-w-2xl">{product.name}</h2>

        <div className="flex flex-row space-x-2">
          <Rating name="read-only" value={4} readOnly />
          <p>(4.0)</p>
        </div>

        <div className="flex flex-row space-x-2">
          <p className="text-2xl font-semibold">${product.new_price}</p>
          <p className="line-through text-gray-600">${product.old_price}</p>
        </div>

        <p>{product.description}</p>

        <div className="my-4 flex flex-col space-y-5">
          <p className="font-medium text-xl">Select size</p>
          <div className="flex flex-row space-x-4">
            <button className="border border-black px-3 py-1">XS</button>
            <button className="border border-black px-3 py-1">S</button>
            <button className="border border-black px-3 py-1">M</button>
            <button className="border border-black px-3 py-1">L</button>
            <button className="border border-black px-3 py-1">XL</button>
            <button className="border border-black px-3 py-1">XXL</button>
          </div>

          <button onClick={() => addToCart(product.id)}>
            <p className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-full flex justify-center items-center space-x-3">
              <p>Add to cart</p>
            </p>
          </button>

          <p>Category: {product.category}</p>
        </div>

        <div className="my-4 flex flex-col space-y-5">
          <p className="font-medium text-xl">Reviews</p>
          <div>
            <Rating name="read-only" value={4} readOnly />
            <p>(4.0)</p>
          </div>
          Tom: This is a great product. I love it.
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
