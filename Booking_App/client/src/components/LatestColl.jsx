import {products} from "../assets/forever-assets/assets/frontend_assets/assets";

export default function LatestColl() {
  return (
    <section className="flex justify-center items-center my-10  flex-col gap-y-4">
      <h1 className="text-4xl flex gap-x-2">
        <span className="text-[#374151]">LATEST</span>
        <span>COLLECTIONS</span>
        <span>---------</span>
      </h1>

      <p className="text-[#374151] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          // map through the latest collections
          products.slice(0, 10).map((product) => (
            <div key={product._id} className="flex text-[#374151] px-4 justify-center items-center flex-col">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full object-cover hover:scale-110 transition ease-in-out duration-300 cursor-pointer"
              />
              <div>
                <p className="pt-3 pb-1 text-sm">{product.name}</p>
                <p className="text-sm font-medium">{product.price}$</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}
