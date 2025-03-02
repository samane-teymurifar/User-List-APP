import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // import axios

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // برای ذخیره ارور درخواست
  const navigate = useNavigate();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     // فرض می‌کنیم ورود موفق باشد
  //     if (username === 'user' && password === 'password') {
  //       localStorage.setItem('token', 'your-auth-token'); // ذخیره توکن ورود
  //       navigate('/'); // هدایت به صفحه اصلی
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //   };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: username,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      setError("Invalid credentials or server error");
    }
  };

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
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default SignIn;
