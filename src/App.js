import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline, Container } from "@mui/material";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import AddUser from "./components/AddUser";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d47a1", 
    },
    background: {
      default: "#0a1929",
      paper: "#102840",
    },
  },
});

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  
  const addUser = (newUser) => {
    setUsers([newUser, ...users]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<UserList users={users} />} />
            <Route path="/user/:id" element={<UserDetails users={users} />} />
            <Route path="/add" element={<AddUser addUser={addUser} />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
