/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { BookStoreContext } from "../context/BookStoreContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import "@fontsource/poppins"; // Import Poppins font

export default function Cart() {
  const { cartItems, getCart, RemoveBookFromCart, UpdateBookQuantity } = useContext(BookStoreContext);

  React.useEffect(() => {
    getCart();
  }, []);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="h-screen flex bg-gradient-to-r from-slate-900 to-slate-700 text-white justify-center items-center">
        <Typography variant="h4" color="primary" sx={{ fontFamily: "Poppins" }}>
          Your cart is empty!
        </Typography>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-r pt-24 from-slate-900 to-slate-700 text-white p-6">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          color: "lightblue",
          marginBottom: "20px",
          fontFamily: "Poppins",
          borderBottom: "2px solid lightblue",
          marginX: "300px",
        }}
      >
        Cart
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#2E2E2E" }}
        className="rounded-lg"
      >
        <Table>
          <TableHead>
            <TableRow>
              {[
                "Cover",
                "Title",
                "Author",
                "Price",
                "Publication Year",
                "Genre",
                "Quantity",
                "Remove",
                "Update Quantity",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow
                key={item._id}
                className="hover:bg-gray-600 duration-300"
              >
                <TableCell sx={{ textAlign: "center" }}>
                  <img
                    src={item.bookId.coverImage}
                    alt="book cover"
                    style={{
                      width: "60px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      border: "1px solid blue",
                    }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {item.bookId.title}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {item.bookId.author}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  ${item.bookId.price}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {item.bookId.publicationYear}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {item.bookId.genre}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </TableCell>
                <TableCell>
                  <Button 
                    onClick={() => RemoveBookFromCart(item._id)}
                    variant="contained"
                    color="primary"
                    sx={{
                      color: "black",
                      fontFamily: "Poppins",
                      backgroundColor: "lightblue",
                      "&:hover": {
                        backgroundColor: "darkblue",
                        color: "white",
                      },
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    color="primary"
                    placeholder="Quantity"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      UpdateBookQuantity(item._id, parseInt(e.target.value));
                    }}
                    sx={{
                      color: "white",
                      fontFamily: "Poppins",
                      textAlign: "center",
                    }}
                  />

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Total amount  */}
      <Typography
        variant="h4"
        align="right"
        gutterBottom
        sx={{
          color: "lightblue",
          marginTop: "20px",
          fontFamily: "Poppins",
          borderBottom: "2px solid lightblue",
          marginX: "300px",
        }}
      >
        Total Amount: $
        {cartItems.reduce(
          (total, item) => total + item.bookId.price * item.quantity,
          0
        )}
      </Typography>

      {/* Checkout */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "20px",
          color: "black",
          marginX: "300px",
          fontFamily: "Poppins",
          backgroundColor: "lightblue",
          "&:hover": {
            backgroundColor: "darkblue",
            color: "white",
          },
        }}
      >
        Checkout
      </Button>
    </div>
  );
}
