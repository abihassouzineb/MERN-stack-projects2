import { createContext, PropsWithChildren, useEffect, useState } from "react";
import axios from "axios";

type Listing = {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  image: string;
  lat: number;
  lng: number;
};

type EstateAppContextType = {
  listings: Listing[];
  getListings: () => Promise<void>;
  setListings: React.Dispatch<React.SetStateAction<Listing[]>>;
};

const EstateAppContext = createContext<EstateAppContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

function EstateAppContextProvider(props: PropsWithChildren<Props>) {
  const [listings, setListings] = useState<Listing[]>([]);

  /**
   * Fetches listings from the server and updates the state.
   * @function
   */
  const getListings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/properties");
      setListings(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch listings:", error);
    }
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <EstateAppContext.Provider value={{ listings, getListings, setListings }}>
      {props.children}
    </EstateAppContext.Provider>
  );
}

export { EstateAppContext, EstateAppContextProvider };
export type { Listing };
