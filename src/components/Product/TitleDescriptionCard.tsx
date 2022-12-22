import { InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { FormCard, FormCardItem } from "./FormCard";
import { formHookType, formValues } from "../shared/types";
type props = {
  formHook: formHookType;
};
const TitleDescriptionCard: FC<props> = ({ formHook }: props) => {
  const { errors, register } = formHook;
  return (
    <FormCard>
      <FormCardItem size={{ xs: 12 }}>
        <InputLabel sx={{ color: "black" }} htmlFor="title">
          Title
        </InputLabel>
        <TextField
          {...register("title")}
          error={Boolean(errors.title)}
          helperText={errors.title?.message}
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
            {...register("description")}
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
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
