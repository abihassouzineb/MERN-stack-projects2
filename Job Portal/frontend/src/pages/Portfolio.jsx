import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { user } = useUser();

  const AppliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  useEffect(() => {
    user && console.table(user);
  }, [user]);

  return (
    <section className="min-h-screen flex flex-col p-10 items-center bg-gray-100">
      <motion.h1
        className="text-4xl font-medium border-b-4 px-7 border-blue-500 pb-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Portfolio
      </motion.h1>
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-2xl font-medium text-gray-800">
          Welcome, {user ? user.firstName : "User"}
        </p>
        <p className="text-lg text-gray-600 mt-2">
          This is your portfolio page. Here you can see your applied jobs and
          other details.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col gap-4 justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.img
          src={user.imageUrl}
          className="rounded-full w-28 h-28"
          alt={user.firstName}
          whileHover={{ scale: 1.1 }}
        />

        <p className="text-2xl border-b-2 mt-6 border-blue-500 pb-1">
          Your Informations
        </p>
        <div className="flex flex-col gap-2  ring-2 ring-blue-500 p-4 rounded-md">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-semibold border-b-2 border-blue-400">
              Name
            </span>
            : {user.firstName} {user.lastName}
          </p>
          <p className="text-lg font-medium text-gray-800">
            <span className="font-semibold border-b-2 border-blue-400">
              Email
            </span>
            : {user.emailAddresses[0].emailAddress}
          </p>
          <p>
            <span className="font-semibold border-b-2 border-blue-400">
              Phone
            </span>
            : {user.phoneNumbers[0] || "Not provided"}
          </p>
          <p>
            <span className="font-semibold border-b-2 border-blue-400">
              Created At
            </span>
            :{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleString()
              : "Not provided"}
          </p>
          <p>
            <span className="font-semibold border-b-2 border-blue-400">
              Last Sign In
            </span>
            :{" "}
            {user.lastSignInAt
              ? new Date(user.lastSignInAt).toLocaleString()
              : "Not provided"}
          </p>
        </div>

        <div className="mt-10 self-start w-full">
          <h2 className="text-2xl font-medium text-gray-800 border-b-2 border-blue-500 pb-1 w-fit px-3">
            Applied Jobs
          </h2>
          <motion.div
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {AppliedJobs.length > 0 ? (
              AppliedJobs.map((job) => (
                <motion.div
                  key={job._id}
                  className="bg-white p-6 rounded-lg shadow-md w-full"
                  whileHover={{ scale: 1.02 }}
                  //   setting duration
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={job.companyId.image}
                    alt="Company Logo"
                    className="w-20 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex justify-between my-5">
                    <p className="bg-blue-100 border border-blue-300 rounded px-4 py-1.5">
                      {job.location}
                    </p>
                    <p className="bg-red-100 border border-red-300 rounded px-4 py-1.5">
                      {job.level}
                    </p>
                  </div>
                  <p
                    className="text-gray-700 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: job.description.slice(0, 200),
                    }}
                  ></p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-700">No jobs applied yet</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
