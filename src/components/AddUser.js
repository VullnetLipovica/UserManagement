// src/components/AddUser.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (name.length <= 3) {
      setError("Name must be longer than 3 characters");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must contain '@'");
      return;
    }

    setError("");
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone: "N/A",
      website: "N/A",
      company: { name: "N/A" },
      address: {
        street: "N/A",
        suite: "",
        city: "N/A",
        zipcode: "",
      },
    };

    addUser(newUser);
    navigate("/");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Add New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
         {error && (
          <Typography color="error" variant="body2" sx={{ mb: 1 }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    </Box>
  );
};

export default AddUser;
