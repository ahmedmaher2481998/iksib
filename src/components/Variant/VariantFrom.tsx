import {
  Box,
  Button,
  colors,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { variantValidationResolver } from "../../shared/validation/VariantValidation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addVariationDetails,
  flushVariations,
  selectProduct,
  selectVariations,
} from "../../store/productSlice";
import { FormCard, FormCardItem } from "../Product/FormCard";
import FormHeader from "../Product/FormHeader";
import MediaCard from "../Product/MediaCard";
import { formHookType, variantsFormValues } from "../../shared/types";
import VariantLocationListComponent from "./LocayionListComponents";
import SelectVariation from "./SelectVarianton";
import { capitalizeFirstLetter } from "../../shared/utils";
import DisplayCard from "./DisplayCard";

const VariantFrom = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const variationArray = useAppSelector(selectVariations);
  const [selectError, setSelectError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    getValues,
    reset,

    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm<variantsFormValues>({
    resolver: variantValidationResolver,
    mode: "onChange",
    defaultValues: {
      variationArray: [],
    },
  });
  useEffect(() => {
    dispatch(flushVariations());
  }, []);
  const formHook: formHookType<variantsFormValues> = {
    control,
    errors,
    getValues,
    register,
    setValue,
    watch,
  };
  // TODO controls the values of the validation form

  const handleProductSubmit = (data: variantsFormValues) => {
    if (variationArray.length < 1) {
      setSelectError("Please Select At least one Variant...");
    } else {
      data.variationArray = [...variationArray];
      data.variation_string = data.variationArray
        .map((i) => capitalizeFirstLetter(i.value))
        .join("-");
      dispatch(flushVariations());
      dispatch(addVariationDetails(data));
      console.log("data", data);
      reset();
    }
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
          gap={2}
        >
          <FormHeader title="Variants" />
          <FormCard>
            <FormCardItem size={{ xs: 12 }}>
              <Stack
                alignItems={"center"}
                direction={"column"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
                spacing={1}
              >
                {selectError && (
                  <InputLabel
                    sx={{ fontSize: 14, mt: 2 }}
                    error={Boolean(selectError)}
                  >
                    {selectError}
                  </InputLabel>
                )}
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent="space-between"
                  p={1}
                >
                  {product.attributes?.map((option) => {
                    return (
                      <>
                        <SelectVariation option={option} key={option.name} />
                      </>
                    );
                  })}
                </Grid>
              </Stack>
              <Typography pl={1} pb={2}>
                Variant:
                <span
                  style={{
                    fontSize: 14,
                    color: colors.grey[700],
                  }}
                >
                  {variationArray
                    .map((i) => capitalizeFirstLetter(i.value))
                    .join(",")}
                </span>
              </Typography>
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
              pl={3}
              py={1}
              color={"black"}
            >
              Inventory
            </Typography>

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
                onClick={() => {
                  if (variationArray.length < 1) {
                    setSelectError("Please Select At least one Variant...");
                  }
                }}
                sx={{ bgcolor: "primary.main", mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </FormCard>
          <DisplayCard />
        </Box>
      </Box>
    </>
  );
};

export default VariantFrom;
