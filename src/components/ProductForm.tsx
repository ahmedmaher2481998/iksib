import {
  Box,
  Stack,
  Typography,
  InputLabel,
  colors,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  Autocomplete,
  Button,
  ListItem,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import FormHeader from "./FormHeader";
import { FormCard, FormCardItem } from "./FormCard";
import {
  InitialFormValues,
  productValidationResolver,
} from "../shared/validation/productValidation";
import { useForm } from "react-hook-form";
import { categories as categoriesData } from "../data";
import TitleDescriptionCard from "./TitleDescriptionCard";
import MediaCard from "./MediaCard";
import CategoriesSelect from "./CategoriesSelect";
import AddonsCard from "./AddonsCard";
import { formValues } from "../shared/types";
import SelectionPickableAndVariants from "./SelectionPickableAndVarainats";
import SubCategory from "./SubCategory";

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
  } = useForm<formValues>({
    resolver: productValidationResolver,
    defaultValues: InitialFormValues,
  });
  const formHook = { setValue, register, errors, getValues, control };
  console.log("Values", getValues(), "Errors:", errors);
  const handleProductSubmit = (data: formValues) => {
    console.log("This is data logging");
    console.log(data);
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
            md: "700px",
          },
        }}
        display="flex"
        gap={3}
      >
        <FormHeader title="Add Product" />
        <MediaCard />
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
