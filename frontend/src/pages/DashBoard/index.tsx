/* eslint-disable react-hooks/rules-of-hooks */
import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./Financial-record-form";
import FinancialRecordList from "./Financial-record-list";
export default function index() {
  const { user } = useUser();
  return (
    <div className="flex flex-col justify-center w-screen items-center py-10 h-full space-y-10">
      <h1 className="text-3xl border-b-2 border-blue-400 pb-2 px-8 font-bold">
        Welcome {user?.firstName}! Here are your expenses!
      </h1>
      <FinancialRecordForm />
      <FinancialRecordList />
    </div>
  );
}
