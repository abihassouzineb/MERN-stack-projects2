import { useState } from "react";
import { products } from "../assets/forever-assets/assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

export default function Collections() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  const navigate = useNavigate()

  const categories = ["Men", "Women", "Kids"];
  const subCategories = ["Topwear", "Bottomwear", "Winterwear"];
  const sortOptions = [
    { value: "relevant", label: "Relevant" },
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to Low" },
  ];

  const handleCategoryChange = (category) => {
    // Toggle category selection
    setSelectedCategories((prev) =>
      // If category is already selected, remove it from the list
      prev.includes(category)
        ? // If category is not selected, add it to the list
          prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((s) => s !== subCategory)
        : [...prev, subCategory]
    );
  };

  const handleSortChange = (e) => setSortOption(e.target.value);

  // 🛠️ Filter products based on selected categories & subCategories
  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const subCategoryMatch =
        selectedSubCategories.length === 0 ||
        selectedSubCategories.includes(product.subCategory);
      return categoryMatch && subCategoryMatch;
    })
    .sort((a, b) => {
      if (sortOption === "lowToHigh") return a.price - b.price;
      if (sortOption === "highToLow") return b.price - a.price;
      return 0; // Default: 'Relevant' (no sorting)
    });


  return (
    <section className="flex flex-row justify-center items-start gap-10 px-10 py-8">
      {/* Filters */}
      <div className="w-64 flex flex-col gap-y-6">
        <p className="text-2xl font-semibold">FILTERS</p>

        {/* Category Filter */}
        <div className="border border-gray-300 rounded-lg p-4 w-full">
          <p className="font-medium mb-3">Categories</p>
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>

        {/* SubCategory Filter */}
        <div className="border border-gray-300 rounded-lg p-4 w-full">
          <p className="font-medium mb-3">Type</p>
          {subCategories.map((subCategory) => (
            <label key={subCategory} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={selectedSubCategories.includes(subCategory)}
                onChange={() => handleSubCategoryChange(subCategory)}
              />
              {subCategory}
            </label>
          ))}
        </div>

        {/* Sort By */}
        <div className="border border-gray-300 rounded-lg p-4 w-full">
          <p className="font-medium mb-3">Sort By</p>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded-md w-full p-2"
          >
            {sortOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-3/4 gap-4 gap-y-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="flex text-[#374151] px-4 justify-center items-center flex-col"
              onClick={() => navigate(`/product/${product._id}`)}
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
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
