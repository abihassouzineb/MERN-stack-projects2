import { useEffect, useState } from "react";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch("http://127.0.0.1:8000/students");
        const data = await response.json();
        setStudents(data.students || []); // Handle case where `students` might be undefined
      } catch {
        setError("Failed to fetch students. Please try again later.");
      }
    }

    fetchStudents();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-y-8">
      <h1 className="text-3xl font-bold border-b-4 border-red-500 pb-2">Students</h1>
      {error ? (
        <p className="text-red-600 font-semibold bg-red-100 p-4 rounded-md">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <li
              key={student[0]} // Using the unique ID as key
              className="flex flex-col gap-y-2 p-4 border border-red-500 rounded-lg text-black shadow-md bg-white ring-1 ring-red-200"
            >
              <p className="font-semibold text-lg">Student ID: {student[0]}</p>
              <p>Student Name: {student[1]}</p>
              <p>Student Age: {student[2]}</p>
              <p>Student Grade: {student[3]}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
