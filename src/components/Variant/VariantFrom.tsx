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
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { variantValidationResolver } from "../../shared/validation/VariantValidation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectProduct } from "../../store/productSlice";
import { FormCard, FormCardItem } from "../Product/FormCard";
import FormHeader from "../Product/FormHeader";
import MediaCard from "../Product/MediaCard";
import { formHookType, variantsFormValues } from "../../shared/types";
import VariantLocationListComponent from "./LocayionListComponents";

const VariantFrom = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  // const [variation, setVariation] = useState([]);
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    setError,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm<variantsFormValues>({
    resolver: variantValidationResolver,
    mode: "onChange",
  });
  const formHook: formHookType<variantsFormValues> = {
    control,
    errors,
    getValues,
    register,
    setValue,
    watch,
  };
  // TODO controls the values of the validation form
  console.log("variant form");
  console.log("attributes", product.attributes);
  console.log(getValues());
  console.log(errors);
  const handleProductSubmit = (data: variantsFormValues) => {
    console.log(data);
  };

  return (
    <>
      <Box
        justifyContent={"center"}
        alignItems="center"
        pt={10}
        width="100%"
        display={"flex"}
        onSubmit={handleSubmit(handleProductSubmit)}
        component={"form"}
      >
        <Box
          flexDirection={"column"}
          p={1}
          sx={{
            width: {
              xs: "360px",
              sm: "540px",
              md: "750px",
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
                            <MenuItem key={v} value={v}>
                              {v}
                            </MenuItem>
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
                    <TextField
                      variant="outlined"
                      {...register("sku")}
                      error={Boolean(errors.sku)}
                      helperText={errors.sku?.message}
                    />
                  </Box>
                  <Box>
                    <InputLabel>Price </InputLabel>
                    <TextField
                      {...register("regular_price")}
                      error={Boolean(errors.regular_price)}
                      helperText={errors.regular_price?.message}
                      variant="outlined"
                    />
                  </Box>
                  <Box>
                    <InputLabel>Sale price</InputLabel>
                    <TextField
                      variant="outlined"
                      {...register("sale_price")}
                      error={Boolean(errors.sale_price)}
                      helperText={errors.sale_price?.message}
                    />
                  </Box>
                  <Box>
                    <InputLabel>Cost per item </InputLabel>
                    <TextField
                      {...register("cost")}
                      error={Boolean(errors.cost)}
                      helperText={errors.cost?.message}
                      variant="outlined"
                    />
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
            {/* <Stack
              direction="row"
              flexWrap={"wrap"}
              alignItems="center"
              px={4}
              justifyContent="space-between"
            >
              <>
                <div style={{ minWidth: "250px" }}>
                  <InputLabel>location 1</InputLabel>
                  <TextField
                    {...register("inventory.location1.quantitiy")}
                    error={Boolean(errors.inventory?.location1)}
                    helperText={errors.inventory?.location1?.quantitiy?.message}
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div style={{ minWidth: "250px" }}>
                  <InputLabel>location 2</InputLabel>
                  <TextField
                    {...register("inventory.location2.quantitiy")}
                    error={Boolean(errors.inventory?.location2)}
                    helperText={errors.inventory?.location2?.quantitiy?.message}
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div style={{ minWidth: "250px" }}>
                  <InputLabel>location 3</InputLabel>
                  <TextField
                    {...register("inventory.location3.quantitiy")}
                    error={Boolean(errors.inventory?.location3)}
                    helperText={errors.inventory?.location3?.quantitiy?.message}
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div style={{ minWidth: "250px" }}>
                  <InputLabel>location 4</InputLabel>
                  <TextField
                    {...register("inventory.location4.quantitiy")}
                    error={Boolean(errors.inventory?.location4)}
                    helperText={errors.inventory?.location4?.quantitiy?.message}
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div style={{ minWidth: "250px" }}>
                  <InputLabel>location 5</InputLabel>
                  <TextField
                    {...register("inventory.location2.quantitiy")}
                    error={Boolean(errors.inventory?.location2)}
                    helperText={errors.inventory?.location2?.quantitiy?.message}
                    fullWidth
                    variant="outlined"
                  />
                </div>
              </>
            </Stack> */}
            <Grid
              container
              justifyContent={"space-between"}
              alignItems="flex-start"
              p={2}
              width="100%"
            >
              <VariantLocationListComponent formHook={formHook} />
            </Grid>
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
