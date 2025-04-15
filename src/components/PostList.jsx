import {
  Avatar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const postItem = [
  {
    caption: "Cùng nhau nấu paella cực chill cho buổi tối cuối tuần!",
    img: "https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 184,
    comment: 10,
    view: 2.2,
    share: 24,
  },
  {
    caption: "Bữa tối ấm cúng với bạn bè 🥘✨",
    img: "https://images.unsplash.com/photo-1742412615574-ce65e63598d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d",
    like: 100,
    comment: 5,
    view: 1.2,
    share: 14,
  },
  {
    caption: "Bữa ăn đơn giản nhưng đầy yêu thương.",
    img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 20,
    comment: 1,
    view: 1,
    share: 10,
  },
];

export const PostList = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      maxWidth={"600px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "0 auto",
        padding: "20px 0",
      }}
    >
      {/* Tạo bài viết */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#16181C",
          borderRadius: "25px",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Avatar
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="User Avatar"
            />
            <Typography
              variant="body1"
              color="#808080"
              fontWeight="600"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={handleClickOpen}
            >
              Bắt đầu viết gì đó...
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6EC207",
              color: "#f5f5f5",
              borderRadius: "20px",
              textTransform: "none",
              px: 3,
              "&:hover": {
                backgroundColor: "#5aaa06",
              },
            }}
            onClick={handleClickOpen}
          >
            Đăng
          </Button>
        </Box>
      </Box>

      {/* Hộp thoại tạo bài viết */}
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "#16181c",
            width: "400px",
            paddingBottom: "12px",
          }}
          component="form"
        >
          <DialogTitle sx={{ color: "#f5f5f5", fontWeight: "bold" }}>
            Tạo bài viết mới
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Bạn đang nghĩ gì?"
              name="content"
              fullWidth
              multiline
              rows={3}
              autoFocus
              sx={{
                marginTop: "8px",
                "& .MuiInputBase-root": {
                  color: "#f5f5f5",
                },
                "& .MuiInputLabel-root": {
                  color: "#808080",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#333",
                  },
                  "&:hover fieldset": {
                    borderColor: "#6EC207",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6EC207",
                  },
                },
              }}
            />
          </DialogContent>
          <DialogActions sx={{ padding: "0 24px" }}>
            <Button onClick={handleClose} sx={{ color: "#808080" }}>
              Hủy
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#6EC207",
                color: "#f5f5f5",
                textTransform: "none",
                px: 3,
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#5aaa06",
                },
              }}
            >
              Đăng bài
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Danh sách bài viết */}
      {postItem.map((item, index) => (
        <Post
          key={index}
          caption={item.caption}
          img={item.img}
          like={item.like}
          comment={item.comment}
          view={item.view}
          share={item.share}
        />
      ))}
    </Box>
  );
};
