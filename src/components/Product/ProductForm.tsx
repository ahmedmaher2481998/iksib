import { Box, Stack, Button } from "@mui/material";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import { FormCard, FormCardItem } from "./FormCard";
import {
  InitialproductFormValues,
  productValidationResolver,
} from "../../shared/validation/productValidation";
import { useForm } from "react-hook-form";
import TitleDescriptionCard from "./TitleDescriptionCard";
import MediaCard from "./MediaCard";
import CategoriesSelect from "./CategoriesSelect";
import AddonsCard from "./AddonsCard";
import { productFormValues } from "../../shared/types";
import SelectionPickableAndVariants from "./SelectionPickableAndVarainats";
import SubCategory from "./SubCategory";
import { useAppDispatch } from "../../store/hooks";
import { addProductData } from "../../store/productSlice";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [catagories, setCatagories] = useState<number[]>([]);

  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    control,
    reset,
    setValue,
    watch,
  } = useForm<productFormValues>({
    resolver: productValidationResolver,
    defaultValues: InitialproductFormValues,
    mode: "onChange",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formHook = { setValue, register, errors, getValues, control, watch };
  console.log("Values", getValues(), "Errors:", errors);
  const handleProductSubmit = (data: productFormValues) => {
    console.log("Submitting");
    console.log(data);
    dispatch(addProductData(data));
    if (data.has_varaiations) {
      reset();
      navigate("/variant");
    } else {
      reset();
      navigate("/added");
    }
  };
  return (
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
        <FormHeader title="Add Product" />
        <FormCard>
          <FormCardItem size={{ xs: 12 }}>
            <MediaCard />
          </FormCardItem>
        </FormCard>
        <TitleDescriptionCard formHook={formHook} />
        <FormCard>
          <FormCardItem size={{ xs: 12 }}>
            <Stack width={"100%"} direction="row" spacing={1}>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <CategoriesSelect
                  setCatagories={setCatagories}
                  formHook={formHook}
                  catagories={catagories}
                />
              </Box>
              {/* Sub Catagories */}
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <SubCategory formHook={formHook} catagories={catagories} />
              </Box>
            </Stack>
          </FormCardItem>
        </FormCard>
        <AddonsCard formHook={formHook} />
        <SelectionPickableAndVariants formHook={formHook} />
        <Box width={"100%"} display="flex" px={3} justifyContent="flex-end">
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{ bgcolor: "primary.main" }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductForm;
