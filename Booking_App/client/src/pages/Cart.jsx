/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ForeverAppContext } from "../context/ForeverAppContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

export default function Cart() {
  
  const { GetCart, cart, removeFromCart } = useContext(ForeverAppContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  useEffect(() => {
    GetCart();
  }, []);

  if (cart.length === 0) {
    return (
      <section className="flex flex-col justify-center items-center my-10 h-[31vh]">
        <h1 className="text-4xl flex gap-x-2 mb-6">
          <span>-------</span>
          <span className="text-[#374151]">Your</span>
          <span>Cart</span>
          <span>-------</span>
        </h1>
        <h2 className="text-2xl font-medium border-b-2 pb-1 border-black px-5 mt-4">Your cart is empty</h2>
      </section>
    );
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <section className="flex flex-col justify-center items-center my-10 font-[Outfit]">
      <h1 className="text-4xl flex gap-x-2 mb-6">
        <span>-------</span>
        <span className="text-[#374151]">Your</span>
        <span>Cart</span>
        <span>-------</span>
      </h1>

      <TableContainer component={Paper} className="w-full max-w-4xl">
        <Table className="font-[Outfit]">
          <TableHead>
            <TableRow>
              <TableCell><strong>Image</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Quantity</strong></TableCell>
              <TableCell><strong>Total</strong></TableCell>
              <TableCell><strong className="pl-6">Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img src={item.image[0]} alt={item.name} className="w-16 h-16 object-cover" />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price * item.quantity}</TableCell>
                <TableCell>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-500 text-white py-2 px-5 hover:bg-red-600 transition ease-in-out duration-300"
                  >
                    REMOVE
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[4, 8, 12]}
          component="div"
          count={cart?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <div className="flex mt-10 gap-x-44 justify-center items-center w-full">
        <h2 className="text-3xl">
          TOTAL: <span className="font-bold ">${totalPrice}</span>
        </h2>

        <button className="bg-black text-white py-3 px-5 hover:bg-gray-800 transition ease-in-out duration-300">
          CHECKOUT
        </button>
      </div>
    </section>
  );
}