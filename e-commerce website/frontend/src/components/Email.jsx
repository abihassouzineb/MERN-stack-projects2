function Email() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-red-300 to-white space-y-6 justify-center items-center mx-16 my-10 py-14 px-11">
      <p className="font-medium text-5xl capitalize">
        Get exclusive offers on your email
      </p>
      <p>Subscribe to our newsletter and stay updated.</p>

      <div className="flex relative flex-row justify-center items-center ">
        <input
          className="py-2 border text-left border-gray-400 pr-44 pl-4 rounded-full"
          type="email"
          placeholder="Enter your email"
        />
        <button className="bg-red-500 absolute right-0 hover:bg-red-700 text-white py-2 px-6 rounded-full flex justify-center items-center space-x-3">
          <p>Subscribe</p>
        </button>
      </div>
    </div>
  );
}

export default Email;
