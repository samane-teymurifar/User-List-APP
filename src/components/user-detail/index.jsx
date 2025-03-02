import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Avatar } from "@mui/material";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box
      sx={{
        width: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Avatar
        alt={`${user.first_name} ${user.last_name}`}
        src={user.avatar}
        sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
      />
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography color="textSecondary">{user.email}</Typography>
    </Box>
  );
};

export default UserDetail;
