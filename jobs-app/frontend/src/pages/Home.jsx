function Home() {
      const userName = "Saad"; // You can dynamically set the user's name
    
      return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="text-center text-white p-8 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold mb-4">Welcome, {userName}!</h1>
            <p className="text-lg mb-6">We're glad to have you here. Explore our platform and enjoy your journey.</p>
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      );
    }
    
    export default Home;
    