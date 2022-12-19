import { InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FormCard, FormCardItem } from "./FormCard";

const TitleDescriptionCard = () => {
  return (
    <FormCard>
      <FormCardItem size={{ xs: 12 }}>
        <InputLabel sx={{ color: "black" }} htmlFor="title">
          Title
        </InputLabel>
        <TextField
          id="title"
          fullWidth
          variant="outlined"
          placeholder="Product title"
        />
      </FormCardItem>
      <Box mt={2} width="100%">
        <FormCardItem size={{ xs: 12 }}>
          <InputLabel sx={{ color: "black" }} htmlFor="description">
            Description
          </InputLabel>
          <TextField
            id="description"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            maxRows={4}
            placeholder="Product description"
          />
        </FormCardItem>
      </Box>
    </FormCard>
  );
};

export default TitleDescriptionCard;
