import { useUser } from "@clerk/clerk-react";

export default function Login() {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-gray-600">
        Please log in to view your account details.
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center mt-10 px-6">
      <h1 className="text-4xl font-semibold text-[#374151] mb-6">My Account</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <img
          src={user.imageUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
        />

        <h2 className="text-2xl font-medium text-gray-800">{user.fullName}</h2>
        <p className="text-gray-600">
          {user.primaryEmailAddress?.emailAddress}
        </p>

        <div className="mt-4">
          <p className="text-gray-500">
            <strong>User ID:</strong> {user.id}
          </p>
          <p className="text-gray-500">
            <strong>Username:</strong> {user.fullName || "N/A"}
          </p>
        </div>
      </div>
    </section>
  );
}
