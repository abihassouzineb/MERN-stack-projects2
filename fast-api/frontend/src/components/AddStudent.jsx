import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddStudent = () => {
  const navigate = useNavigate();

  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Spread previous form data
      [name]: value, // Update the specific field
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://127.0.0.1:8000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          age: parseInt(formData.age, 10),
          grade: parseInt(formData.grade, 10),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Student added successfully!");
        console.log("Response:", result);
        navigate("/"); // Redirect after successful submission
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while adding the student.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-y-8">
      <h1 className="text-3xl pt-8 mx-10 font-bold border-b-4 border-red-500 pb-2">
        Add Student
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex text-black flex-col space-y-4 border border-gray-300 rounded-md p-4 w-1/2"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="border border-gray-300 rounded-md p-2 mx-10"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter Age"
          className="border border-gray-300 rounded-md p-2 mx-10"
          required
        />
        <input
          type="number"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          placeholder="Enter Grade"
          className="border border-gray-300 rounded-md p-2 mx-10"
          required
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
