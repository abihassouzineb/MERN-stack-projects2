import { useFinancialRecords } from "../../context/FinancialRecordForm ";

export default function FinancialRecordList() {
  const { records, deleteRecord, totalExpenses } = useFinancialRecords();
  console.log(records);

  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          No Expenses Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Your Expenses
      </h1>
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Payment Method</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id} className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b font-semibold">{record.description}</td>
              <td className="py-3 px-6 border-b text-gray-700">
                ${record.amount}
              </td>
              <td className="py-3 px-6 border-b text-gray-700">
                {record.category}
              </td>
              <td className="py-3 px-6 border-b text-gray-700">
                {record.paymentMethod}
              </td>
              <td className="py-3 px-6 border-b text-gray-700">
                {new Date(record.date).toLocaleDateString()}
              </td>
              <td className="py-3 px-6 border-b text-center">
                <button
                  onClick={() => deleteRecord(record._id || "")}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
