import { useState } from "react";

function AddProduct() {
  const [image, setImage] = useState(null);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    naw_price: 0,
    old_price: 0,
    category: "",
  });

  // Handle file input for the image
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setProductDetails((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  }

  // Handle text/number inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    alert("Product added successfully!");

    let responseData;
    let product = productDetails;

    let formData = new FormData();

    formData.append("image", image);

    await fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    if (responseData) {
      product.image = responseData.image;
      await fetch("http://localhost:3001/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    // Clear form
    setImage(null);
    setProductDetails({
      name: "",
      image: "",
      naw_price: 0,
      old_price: 0,
      category: "",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productDetails.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Product Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Image
            </label>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-32 h-32 object-cover mb-2 rounded-md"
              />
            )}
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Product Price */}
          <div>
            <label
              htmlFor="old_price"
              className="block text-gray-700 font-medium mb-1"
            >
              Price
            </label>
            <input
              type="number"
              id="old_price"
              name="old_price"
              value={productDetails.old_price}
              onChange={handleChange}
              placeholder="Enter product price"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Offer Price */}
          <div>
            <label
              htmlFor="naw_price"
              className="block text-gray-700 font-medium mb-1"
            >
              Offer Price
            </label>
            <input
              type="number"
              id="naw_price"
              name="naw_price"
              value={productDetails.naw_price}
              onChange={handleChange}
              placeholder="Enter offer price"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Product Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-1"
            >
              Product Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={productDetails.category}
              onChange={handleChange}
              placeholder="Enter product category"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-medium"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
