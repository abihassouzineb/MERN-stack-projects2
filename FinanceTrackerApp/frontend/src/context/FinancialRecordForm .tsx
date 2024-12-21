/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

interface FinancialRecord {
  _id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

// explanation : This interface is used to define the shape of the FinancialRecordContextProps object.
interface FinancialRecordContextProps {
  // explanation : This property is an array of FinancialRecord objects.
  records: FinancialRecord[];
  // explanation : This property is a function that takes a FinancialRecord object as an argument and returns a Promise<void>.
  addRecord: (record: FinancialRecord) => Promise<void>;
  // explanation : This property is a function that takes a string as an argument and returns a Promise<void>.
  deleteRecord: (id: string) => Promise<void>;
  // explanation: This returns a number that represents the total amount of Expenses in the records array.
  totalExpenses: number;
}

// explanation : This is a React Context object that is used to share data between components.
const FinancialRecordContext = createContext<
  FinancialRecordContextProps | undefined
>(undefined);

// explanation : This hook is used to access the FinancialRecordContext object.
export const useFinancialRecords = () => {
  const context = useContext(FinancialRecordContext);
  if (!context) {
    throw new Error(
      "useFinancialRecords must be used within a FinancialRecordProvider"
    );
  }
  return context;
};

// explanation : This component is used to provide the FinancialRecordContext object to its children components.
export const FinancialRecordProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/financialRecords/GetAll/${user?.id}`
        );
        setRecords(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      fetchRecords();
    }
  }, [user]);

  const addRecord = async (record: FinancialRecord) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/financialRecords`,
        record
      );
      setRecords([...records, response.data]);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRecord = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/financialRecords/${id}`);
      setRecords(records.filter((record) => record._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FinancialRecordContext.Provider
      value={{
        records,
        addRecord,
        deleteRecord,
        totalExpenses: records.reduce((acc, record) => acc + record.amount, 0),
      }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};
