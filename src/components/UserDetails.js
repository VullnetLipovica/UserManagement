import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id.toString() === id);

  if (!user) return <Typography>User not found</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Website: {user.website}</Typography>
        <Typography>
          Address: {user.address.street}, {user.address.city}
        </Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
          Back
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetails;
