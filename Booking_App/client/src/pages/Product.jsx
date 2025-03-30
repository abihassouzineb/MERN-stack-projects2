import { useParams, useNavigate } from "react-router-dom";
import { products } from "../assets/forever-assets/assets/frontend_assets/assets";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { ForeverAppContext } from "../context/ForeverAppContext";
export default function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product._id === productId);

  const related_products = products.filter(
    (item) => item.category === product.category && item._id !== productId
  );

  console.log(related_products);

  const {addToCart} = useContext(ForeverAppContext)

  return (
    <>
      <section className="flex flex-row justify-center gap-x-10 my-6 items-start">
        <img src={product.image} alt={product.name} className="w-[40%]" />
        <div className="flex flex-col gap-y-6 justify-center mt-6 items-start">
          <div className="flex flex-col gap-y-2 justify-center items-start">
            <p className="text-2xl font-medium">{product.name}</p>
            <Rating value={4.5} precision={0.5} readOnly />
          </div>

          <p className="text-3xl font-medium">{product.price}$</p>

          <p className="text-lg max-w-2xl text-[#374151]">
            {product.description}
          </p>

          <div className="flex flex-col gap-y-2 items-start">
            <p>Select Size</p>
            <div className="flex flex-row gap-x-4">
              {product.sizes.map((size) => (
                <div key={size}>
                  <p className="py-3 px-5 text-lg border border-black">
                    {size}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button className="text-white bg-black px-5 py-2 mt-2 " onClick={() => addToCart(product)}>
            ADD TO CART
          </button>

          <hr className="bg-gray-600 w-full" />

          <div className="flex text-gray-600 flex-col items-start gap-y-2">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </section>

      {/* related products */}
      <section className="flex my-20 flex-col justify-center items-center gap-y-6">
        <h1 className="text-4xl flex gap-x-2">
          <span>---------</span>
          <span className="text-[#374151]">RELATED</span>
          <span>PRODUCTS</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full gap-4 gap-y-6">
          {related_products.slice(0, 5).map((product) => {
            return (
              <div
                key={product._id}
                className="flex text-[#374151] px-4 justify-center items-center flex-col"
                onClick={() => { 
                  navigate(`/product/${product._id}`); 
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full object-cover hover:scale-110 transition ease-in-out duration-300 cursor-pointer"
                />
                <div>
                  <p className="pt-3 pb-1 text-sm">{product.name}</p>
                  <p className="text-sm font-medium">${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
