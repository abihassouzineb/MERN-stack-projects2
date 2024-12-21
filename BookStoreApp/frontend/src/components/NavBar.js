import React, { useContext, useState } from "react";
import { FaBars, FaUser, FaCartPlus, FaSearch } from "react-icons/fa";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { BooksStoreAppContext } from "../context/BooksStoreApp";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const { books, cartTotalQuantity, isLoggedIn, logout } =
    useContext(BooksStoreAppContext);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event, value) => {
    setSearchInput(value);
  };

  const handleSearchSelect = (event, value) => {
    if (value) {
      const selectedBook = books.find((book) => book.title === value);
      if (selectedBook) {
        navigate(`/book/${selectedBook._id}`);
      }
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <FaBars className="mr-4" />
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            id="book-search"
            freeSolo
            options={books.map((option) => option.title)}
            value={searchInput}
            onInputChange={handleSearchChange}
            onChange={handleSearchSelect}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search for books"
                variant="outlined"
                className="bg-white rounded"
                InputProps={{
                  ...params.InputProps,
                  className: "h-10 p-2",
                  style: {
                    height: "33px",
                    display: "flex",
                    alignItems: "center",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaSearch className="text-gray-500" />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: {
                    lineHeight: "1.2",
                    top: "50%",
                    transform: "translateY(-50%)",
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    paddingLeft: "2rem", // Adjust padding to prevent overlap
                    height: "1.25rem", // Adjust text height if needed
                  },
                }}
              />
            )}
          />
        </Stack>
      </div>
      <div className="flex items-center">
        <Link to="/">
          <button className="mr-10 bg-blue-500 px-5 py-2 rounded-md">
            Home
          </button>
        </Link>
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="mr-10 bg-blue-500 px-5 text-white py-2 rounded-md"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <FaUser className="mr-10 bg-white text-black rounded-full text-2xl" />
          </Link>
        )}
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
          <Link to="/cart">
            <FaCartPlus className="mr-2" />
          </Link>
          <span className="font-semibold">Cart ({cartTotalQuantity})</span>
        </button>
      </div>
    </nav>
  );
}
