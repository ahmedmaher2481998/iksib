import { ArrowBack } from "@mui/icons-material";
import { IconButton, colors, Stack, Typography } from "@mui/material";
import React from "react";
type props = { title: string };
const FormHeader = ({ title }: props) => (
  <Stack gap={2} direction={"row"} alignItems="center">
    <IconButton
      sx={{
        color: "black",
        border: "1px",
        borderColor: colors.grey[300],
        borderStyle: "solid",
        borderRadius: "5px",
      }}
    >
      <ArrowBack />
    </IconButton>
    <Typography component={"h1"} fontSize={24} fontWeight={500}>
      {title}
    </Typography>
  </Stack>
);

export default FormHeader;
