import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UsersList from "../../components/users-list";
import Header from "../../components/header";
import UserDialog from "../../components/user-dialog";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [editingUser, setEditingUser] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        setUsers(response.data.data);
      } catch (error) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };
  const handleOpenCreateModal = () => {
    setEditingUser(false);
    setSelectedUserId(null);
    setName("");
    setJob("");
    setOpenModal(true);
  };
  const handleOpenEditModal = (user) => {
    setEditingUser(true);
    setSelectedUserId(user.id);
    setName(user.first_name);
    setJob("");
    setOpenModal(true);
  };
  const handleCreateUser = async () => {
    if (!name || !job) {
      setError("Please enter name and job");
      return;
    }
    setProcessing(true);
    setError(null);
    try {
      const response = await axios.post("https://reqres.in/api/users", {
        name,
        job,
      });

      const newUser = {
        id: response.data.id,
        first_name: name,
        last_name: "",
        email: "newuser@example.com",
        avatar: "https://via.placeholder.com/150",
      };

      setUsers([newUser, ...users]);
      setOpenModal(false);
    } catch (error) {
      setError("Failed to create user");
    } finally {
      setProcessing(false);
    }
  };
  const handleEditUser = async () => {
    if (!name || !job || !selectedUserId) {
      setError("Please enter name and job");
      return;
    }
    setProcessing(true);
    setError(null);
    try {
      await axios.put(`https://reqres.in/api/users/${selectedUserId}`, {
        name,
        job,
      });
      setUsers(
        users.map((user) =>
          user.id === selectedUserId ? { ...user, first_name: name } : user
        )
      );
      setOpenModal(false);
    } catch (error) {
      setError("Failed to update user");
    } finally {
      setProcessing(false);
    }
  };
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Header user={user} handleLogout={handleLogout} />
      <Box sx={{ padding: 2}}>
        <Typography variant="h4" gutterBottom>
          Users List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenCreateModal}
          sx={{ marginBottom: 2 }}
        >
          Create User
        </Button>
        <UsersList
          users={users}
          handleOpenEditModal={handleOpenEditModal}
          setUsers={setUsers}
          setError={setError}
          setEditingUser={setEditingUser}
          setSelectedUserId={setSelectedUserId}
          setName={setName}
          setJob={setJob}
          setOpenModal={setOpenModal}
        />
      </Box>
      <UserDialog
        openModal={openModal}
        setOpenModal={setOpenModal}
        editingUser={editingUser}
        name={name}
        setName={setName}
        job={job}
        setJob={setJob}
        handleCreateUser={handleCreateUser}
        handleEditUser={handleEditUser}
        processing={processing}
      />
    </Box>
  );
};

export default HomePage;
