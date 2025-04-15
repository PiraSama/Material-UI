import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Box } from "@mui/material";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card sx={{ maxWidth: "100%", bgcolor: "#16181C", borderRadius: "25px" }}>
      <CardHeader
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon sx={{ color: "#f5f5f5" }} />
          </IconButton>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              color="#f5f5f5"
              sx={{ fontWeight: 600 }}
            >
              Diogo Forlan
            </Typography>
            <Typography variant="body1" color="#808080">
              9 giờ trước
            </Typography>
          </Box>
        }
      />
      <Box sx={{ paddingLeft: "56px" }}>
        <CardContent sx={{ paddingTop: 0 }}>
          <Typography
            variant="body2"
            sx={{ maxWidth: "480px", color: "#f5f5f5" }}
          >
            {caption}
          </Typography>
        </CardContent>
        <Box sx={{ padding: "0 16px" }}>
          <CardMedia
            component="img"
            height="auto"
            image={img}
            alt="Paella dish"
            sx={{ borderRadius: "25px" }}
          />
        </Box>
        <CardActions disableSpacing sx={{ display: "flex", gap: "60px", mt: 1 }}>
  {/* Like Button */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <IconButton
      aria-label="add to favorites"
      onClick={handleLike}
      sx={{
        backgroundColor: isLiked ? "#ffe6e6" : "transparent",
        "&:hover": {
          backgroundColor: "#ffebeb",
        },
        borderRadius: "50%",
        p: 1,
        transition: "all 0.2s ease-in-out",
      }}
    >
      {isLiked ? (
        <FavoriteIcon sx={{ fontSize: "22px", color: "#e53935" }} />
      ) : (
        <FavoriteBorderOutlinedIcon sx={{ fontSize: "22px", color: "#aaa" }} />
      )}
    </IconButton>
    <Typography variant="body2" color="#aaa" sx={{ ml: 0.5 }}>
      {likes}K
    </Typography>
  </Box>

  {/* Comment Button */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <IconButton
      aria-label="comment"
      sx={{
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#2a2a2a",
        },
        borderRadius: "50%",
        p: 1,
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "22px", color: "#aaa" }} />
    </IconButton>
    <Typography variant="body2" color="#aaa" sx={{ ml: 0.5 }}>
      {comment}K
    </Typography>
  </Box>

  {/* View Button */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <IconButton
      aria-label="trending view"
      sx={{
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#2a2a2a",
        },
        borderRadius: "50%",
        p: 1,
        transition: "all 0.2s ease-in-out",
      }}
    >
      <TrendingUpOutlinedIcon sx={{ fontSize: "22px", color: "#aaa" }} />
    </IconButton>
    <Typography variant="body2" color="#aaa" sx={{ ml: 0.5 }}>
      {view}M
    </Typography>
  </Box>

  {/* Share Button */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <IconButton
      aria-label="share"
      sx={{
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#2a2a2a",
        },
        borderRadius: "50%",
        p: 1,
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ShareOutlinedIcon sx={{ fontSize: "22px", color: "#aaa" }} />
    </IconButton>
    <Typography variant="body2" color="#aaa" sx={{ ml: 0.5 }}>
      {share}K
    </Typography>
  </Box>
</CardActions>

      </Box>
    </Card>
  );
}
