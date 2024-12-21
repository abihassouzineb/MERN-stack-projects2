import { useUser, SignOutButton } from "@clerk/clerk-react";

export default function NavBar() {
  const { user } = useUser();

  const handleSignOut = () => {
    window.location.href = "/auth";
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-white text-2xl font-bold">Finance Tracker</h1>
      {user?.firstName && (
        <div className="flex items-center space-x-4">
          <p className="text-white">Hello, {user.firstName}</p>
          <img
            src={user.imageUrl}
            alt={user.fullName || ""}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <SignOutButton>
            <button type="button" onClick={handleSignOut}  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      )}
    </nav>
  );
}
