// src/components/UserList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

const UserList = ({ users = [] }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    (user.name || "")
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    (user.email || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 2 }}>
     
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h4" color="primary">
          User Management
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/add"
          color="primary"
        >
          Add User
        </Button>
      </Box>

      
      <TextField
        label="Search by name or email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputLabelProps={{ style: { color: "rgba(255,255,255,0.8)" } }}
        inputProps={{ style: { color: "white" } }}
        sx={{ mb: 2 }}
      />

    
      <TableContainer component={Paper} sx={{ backgroundColor: "#0d1b2a" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Company
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} sx={{ color: "white", textAlign: "center" }}>
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell sx={{ color: "white" }}>{user.name}</TableCell>
                  <TableCell sx={{ color: "white" }}>{user.email}</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {user.company?.name ?? "—"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      component={Link}
                      to={`/user/${user.id}`}
                      size="small"
                      sx={{ backgroundColor: "#1b263b" }}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
