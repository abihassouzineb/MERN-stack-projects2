import { useContext } from "react";
import { GymAppContext } from "../context/GymAppContext";
import { Link } from "react-router-dom";

export default function ShowingResults() {
  const { exercises, filteredExercises, FetchExerciseById } = useContext(GymAppContext);

  // Determine the exercises to display
  const displayedExercises =
    filteredExercises.length > 0 ? filteredExercises : exercises;

  // Check loading and empty states
  const isLoading = !exercises || exercises.length === 0;
  const isEmpty = displayedExercises.length === 0 && !isLoading;

  return (
    <section className="px-16 py-14 flex flex-col gap-y-5">
      <h1 className="text-2xl font-medium border-b-2 border-orange-500 pb-2">
        Showing Results
      </h1>
      <p className="text-lg border-b-2 border-orange-500 pb-1 w-fit px-4">
        <span className="font-[550] mr-2">
          {isLoading ? "Loading..." : isEmpty ? 0 : displayedExercises.length}
        </span>
        {isLoading
          ? "Loading results..."
          : isEmpty
          ? "No results found"
          : "results"}
      </p>

      <ul className="grid grid-cols-3 gap-4">
        {isLoading ? (
          // Show loading skeletons
          Array.from({ length: 6 }).map((_, index) => (
            <li
              key={index}
              className="bg-gray-200 animate-pulse rounded-md h-48"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Loading..."
                className="w-full h-full object-cover rounded-md"
              />
            </li>
          ))
        ) : isEmpty ? (
          // Show empty state
          <p className="text-center col-span-3 text-gray-600">
            No exercises match the selected criteria. Please try a different
            filter.
          </p>
        ) : (
          // Show exercise results
          displayedExercises.map((exercise) => (
            <li
              key={exercise.id}
              className="border flex flex-col border-t-4 rounded-t-none justify-center items-start p-2 border-orange-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,125,50,0.8)] shadow-lg duration-300 rounded-2xl"
            >
              {/* Exercise image */}
              <img
                src={exercise.image || "https://placehold.co/150"}
                alt={exercise.name || "Exercise"}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{exercise.name}</h2>
                <p className="text-gray-600">{exercise.bodyPart}</p>
              </div>

              <Link to={`/exercises/${exercise.id}`}>
                <button
                  onClick={() => FetchExerciseById(exercise.id)}
                  className="relative self-center inline-flex items-center justify-center px-8 py-3.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
                  aria-label={`Explore more about ${exercise.name}`}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto h-full opacity-100 object-stretch"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                  <span className="relative text-base font-semibold">
                    Explore More
                  </span>
                </button>
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
