import { useContext } from "react";
import { GymAppContext } from "../context/GymAppContext";
// Importing training icon from react-icons
import { FaDumbbell } from "react-icons/fa";

export default function BodyPartsPage() {
  const { exercises, filterExercisesByBodyPart } = useContext(GymAppContext);

  const bodyParts = [...new Set(exercises.map((exercise) => exercise.bodyPart))];

  console.log(bodyParts);

  return (
    <section className="flex justify-center items-center">
      <ul className="grid grid-cols-2 md:grid-cols-7 gap-4">
        {/* adding "All" option */}
        <li
          onClick={() => filterExercisesByBodyPart("All")}
          key="all"
          className="flex items-center flex-col justify-center gap-3 border border-orange-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,125,50,0.8)] shadow-lg duration-300 bg-gray-100 px-7 py-5 rounded-md"
        >
          <FaDumbbell className="text-2xl text-orange-500" />
          <span className="text-lg">All</span>
        </li>
        {bodyParts.map((part) => (
          <li
            onClick={() => filterExercisesByBodyPart(part)}
            key={part.id}
            className="flex items-center flex-col justify-center gap-3 border border-orange-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,125,50,0.8)] shadow-lg duration-300 bg-gray-100 px-7 py-5 rounded-md"
          >
            <FaDumbbell className="text-2xl text-orange-500" />
            <span className="text-lg">{part}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
