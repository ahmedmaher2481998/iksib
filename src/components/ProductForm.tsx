import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  InputLabel,
  colors,
  TextField,
} from "@mui/material";
import React from "react";
import { ArrowBack } from "@mui/icons-material";
import FormHeader from "./FormHeader";
import { FromCard, FormCardItem } from "./FormCard";
import { productValidationResolver } from "../shared/validation/productValidation";
import { useForm } from "react-hook-form";
type formValues = {
  title: string;
};
const ProductForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<formValues>({
    resolver: productValidationResolver,
  });
  const handleOnDrop = (e: React.DragEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      pt={10}
      width="100%"
      display={"flex"}
      component={"form"}
      //   bgcolor={colors.amber[100]}
    >
      <Box
        flexDirection={"column"}
        width={"800px"}
        display="flex"
        // bgcolor={colors.green[200]}
        gap={3}
      >
        <FormHeader title="Add Product" />
        <FromCard>
          <FormCardItem size={{ xs: 12 }}>
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
          </FormCardItem>
        </FromCard>
        <FromCard>
          <FormCardItem size={{ xs: 12 }}>
            <InputLabel sx={{ color: "black" }} htmlFor="title">
              Title
            </InputLabel>
            <TextField
              id="title"
              fullWidth
              variant="outlined"
              placeholder="product title"
            />
          </FormCardItem>
        </FromCard>
      </Box>
    </Box>
  );
};

export default ProductForm;
