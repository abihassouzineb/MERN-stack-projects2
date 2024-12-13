import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";

export default function Admin() {
      return (
        <div>
          
          <Routes>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ListProduct />} />
          </Routes>
        </div>
      )
}