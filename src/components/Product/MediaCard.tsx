import { Box, colors, InputLabel, Typography } from "@mui/material";
import React from "react";

const MediaCard = () => {
  const handleOnDrop = (e: React.DragEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography mb={1} fontWeight="semibold" fontSize={16}>
        Media
      </Typography>
      <InputLabel
        sx={{
          width: "100%",
          bgcolor: colors.green[50],
          borderRadius: "20px",
          border: "1px dashed",
          borderColor: colors.grey[400],
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        htmlFor="media"
      >
        <Typography fontSize={16} fontWeight="bold" color="black">
          Drag your images here
        </Typography>
        <Typography fontSize={14} color={colors.grey[600]}>
          (only *jpeg*png images will be accepted)
        </Typography>
      </InputLabel>
      <input
        style={{ display: "none" }}
        accept="image/*"
        onDrop={handleOnDrop}
        type="file"
        name="media"
        id="media"
      />
    </Box>
  );
};

export default MediaCard;
