import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe2",
      username: "@john_doe2",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe3",
      username: "@john_doe3",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe4",
      username: "@john_doe4",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        position: "fixed",
        width: "360px"
      }}
    >
      {/* Thanh tìm kiếm */}
      <TextField
        placeholder="Tìm kiếm"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#808080" }} />
            </InputAdornment>
          ),
          style: {
            color: "#f5f5f5",
            backgroundColor: "#16181c",
            borderRadius: "25px",
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
          },
        }}
      />

      {/* Tạo khoảng cách */}
      <Box sx={{ height: "20px" }} />

      {/* Danh sách kết quả */}
      <Box
        sx={{
          backgroundColor: "#16181c",
          borderRadius: "25px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "150px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            color: "#f5f5f5",
          }}
        >
          {searchTerm ? "Kết quả tìm kiếm" : "Người liên hệ gần đây"}
        </Typography>

        {filteredContacts.length > 0 ? (
          <List>
            {filteredContacts.map((contact, index) => (
              <ListItem key={index} sx={{ padding: "8px 0" }}>
                <ListItemAvatar>
                  <Avatar alt={contact.name} src={contact.avatar} />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#f5f5f5",
                    },
                  }}
                  primary={contact.name}
                  secondary={contact.username}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography sx={{ color: "#ccc", marginTop: "8px" }}>
            Không tìm thấy người dùng nào.
          </Typography>
        )}

        {!searchTerm && (
          <Box sx={{ marginTop: "8px" }}>
            <Link
              href="#"
              sx={{
                color: "#6ec207",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <Typography>Xem thêm</Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;
