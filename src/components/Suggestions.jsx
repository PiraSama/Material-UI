import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import "../styles/Suggestions.css";

// Mock data for suggestions
const suggestedUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    username: "@mikejohnson",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
  },
  // Add more users as needed
];

const Suggestions = () => {
  const [following, setFollowing] = React.useState({});

  const handleFollow = (userId) => {
    setFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <Box
      maxWidth={"350px"}
      sx={{
        padding: "16px",
        backgroundColor: "#16181c",
        borderRadius: "25px",
        position: "fixed",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#f5f5f5",
          }}
        >
          Gợi ý cho bạn
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            color: "#6ec207",
          }}
        >
          Xem tất cả
        </Typography>
      </Box>

      <List sx={{ width: "100%", gap: 1, display: "flex", flexDirection: "column" }}>
  {suggestedUsers.map((user) => (
    <ListItem
      key={user.id}
      sx={{
        px: 1,
        py: 1,
        borderRadius: "12px",
        transition: "background 0.2s ease",
        "&:hover": {
          backgroundColor: "#2a2a2a",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
        <Avatar src={user.avatar} sx={{ width: 44, height: 44 }} />
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: "#f5f5f5",
              fontSize: "0.92rem",
            }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#888", fontSize: "0.78rem" }}
          >
            {user.username}
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        size="small"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "0.78rem",
          px: 2,
          py: 0.5,
          borderRadius: "25px",
          backgroundColor: following[user.id] ? "#262626" : "#f5f5f5",
          color: following[user.id] ? "#aaa" : "#0a0a0a",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: following[user.id] ? "#393939" : "#e0e0e0",
          },
        }}
        onClick={() => handleFollow(user.id)}
      >
        {following[user.id] ? "Đã theo dõi" : "Theo dõi"}
      </Button>
    </ListItem>
  ))}
</List>

    </Box>
  );
};

export default Suggestions;
