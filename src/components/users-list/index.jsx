import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UsersList({
  users,
  setUsers,
  setError,
  setEditingUser,
  setSelectedUserId,
  setName,
  setJob,
  setOpenModal,
}) {
  const navigate = useNavigate();
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      setError("Failed to delete user");
    }
  };
  const handleOpenEditModal = (user) => {
    setEditingUser(true);
    setSelectedUserId(user.id);
    setName(user.first_name);
    setJob("");
    setOpenModal(true);
  };

  return (
    <List>
      {users.map((user) => (
        <>
          <ListItem
            key={user.id}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 2,
              cursor: "pointer",
            }}
            onClick={() => navigate(`/user/${user.id}`)}
          >
            <Avatar
              alt={`${user.first_name} ${user.last_name}`}
              src={user.avatar}
              sx={{ marginRight: 2 }}
            />
            <ListItemText
              primary={`${user.first_name} ${user.last_name}`}
              secondary={user.email}
            />
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginRight: 1 }}
              onClick={(e) => {
                e.stopPropagation();
                handleOpenEditModal(user);
              }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(user.id);
              }}
            >
              Delete
            </Button>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}

export default UsersList;
