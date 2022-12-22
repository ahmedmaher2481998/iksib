import {
  Box,
  Button,
  colors,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { variantValidationResolver } from "../../shared/validation/VariantValidation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectProduct } from "../../store/productSlice";
import { FormCard, FormCardItem } from "../Product/FormCard";
import FormHeader from "../Product/FormHeader";
import MediaCard from "../Product/MediaCard";

const VariantFrom = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const [variation, setVariation] = useState([]);
  const { control, getValues, reset, setError, setValue, register } = useForm({
    resolver: variantValidationResolver,
    mode: "onChange",
  });

  return (
    <>
      <Box
        justifyContent={"center"}
        alignItems="center"
        pt={10}
        width="100%"
        display={"flex"}
        // onSubmit={handleSubmit(handleProductSubmit)}
        component={"form"}
      >
        <Box
          flexDirection={"column"}
          p={1}
          sx={{
            width: {
              xs: "360px",
              sm: "540px",
              md: "800px",
            },
          }}
          display="flex"
          gap={3}
        >
          <FormHeader title="Variants" />
          <FormCard>
            <FormCardItem size={{ xs: 12 }}>
              <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent="space-around"
                spacing={2}
              >
                {product.attributes?.map((option) => {
                  return (
                    <>
                      <FormControl
                        sx={{ m: 1, minWidth: "120px", width: "100%" }}
                        size="small"
                      >
                        <Typography color={"black"}>{option.name}</Typography>
                        <Select
                          onChange={(e) => {
                            const { value } = e.target;
                          }}
                        >
                          {option.values?.map((v) => (
                            <MenuItem value={v}>{v}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </>
                  );
                })}
              </Stack>
            </FormCardItem>
            <Stack
              width={"100%"}
              justifyContent="space-between"
              alignItems={"center"}
              direction="row"
              spacing={1}
              sx={{
                pb: 2,
                mb: 2,
                borderBottom: "2px solid",
                borderBottomColor: colors.grey[200],
              }}
            >
              <FormCardItem size={{ xs: 5.2 }}>
                <MediaCard />
              </FormCardItem>
              <FormCardItem size={{ xs: 5.2 }}>
                <Stack
                  direction={"column"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  spacing={1}
                >
                  <Box>
                    <InputLabel>SKU (stock keeping unit) </InputLabel>
                    <TextField variant="outlined" />
                  </Box>
                  <Box>
                    <InputLabel>Price </InputLabel>
                    <TextField variant="outlined" />
                  </Box>
                  <Box>
                    <InputLabel>Cost per item </InputLabel>
                    <TextField variant="outlined" />
                  </Box>
                </Stack>
              </FormCardItem>
            </Stack>
            <Typography
              fontSize={18}
              width={"100%"}
              pl={4}
              pb={2}
              color={"black"}
            >
              Inventory
            </Typography>
            <Stack
              direction="row"
              flexWrap={"wrap"}
              alignItems="center"
              px={4}
              justifyContent="space-between"
            >
              {Array(5)
                .fill("")
                .map((v, i) => {
                  return (
                    <div style={{ minWidth: "250px" }}>
                      <InputLabel>location {i + 1}</InputLabel>
                      <TextField fullWidth variant="outlined" />
                    </div>
                  );
                })}
            </Stack>
            <Box width={"100%"} display="flex" px={3} justifyContent="flex-end">
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{ bgcolor: "primary.main", mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </FormCard>
        </Box>
      </Box>
    </>
  );
};

export default VariantFrom;
