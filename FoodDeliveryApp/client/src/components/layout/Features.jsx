/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { FoodAppContext } from "../../context/FoodAppContext";

export default function Features() {
  const { recipes, restaurants, fetchRestaurants } = useContext(FoodAppContext);
  console.log(recipes);
  console.log(restaurants);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="flex flex-col justify-center items-center px-16 py-10 bg-gradient-to-r w-screen from-green-100 to-green-50">
        <p className="text-3xl  border-b-4 border-green-500 pb-2 font-bold text-green-900">
          Best World Recipes
        </p>

        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {recipes.slice(0, 4).map((recipe) => (
            <div
              key={recipe.id}
              className="flex text-center flex-col justify-center  items-center bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-bold text-green-900 max-w-md">
                {recipe.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-16 py-10 bg-gradient-to-r w-screen from-green-100 to-green-50">
        <p className="text-3xl border-b-4 border-green-500 pb-2 font-bold text-green-900">
          Best World Restaurants
        </p>

        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="flex text-center flex-col justify-center items-center bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={restaurant.logo_photos[0]}
                alt={restaurant.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-bold text-green-900 max-w-md">
                {restaurant.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
