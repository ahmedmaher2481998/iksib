import {
  Box,
  Container,
  IconButton,
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
} from "@mui/material";
import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import FormHeader from "./FormHeader";
import { FormCard, FormCardItem } from "./FormCard";
import { productValidationResolver } from "../shared/validation/productValidation";
import { useForm } from "react-hook-form";
import { categories as categoriesData } from "../data";
import SubCatagories from "./SubCatogries";
import TitleDescriptionCard from "./TitleDescriptionCard";
import MediaCard from "./MediaCard";
import CategoriesSelect from "./CategoriesSelect";
import AddonsCard from "./AddonsCard";

type formValues = {
  id: number;
  dine_in: boolean;
  pickable: boolean;
  has_varaiations: boolean;
  title: string;
  description: string;
  categories: string[];
  addons: string[];
  attributes: { name: string; values: string[] }[];
};
const ProductForm = () => {
  const [catagories, setCatagories] = useState<string[]>([]);
  const [pickable, setPickable] = useState<1 | 0>();
  const [hasVariants, setHasVariants] = useState<1 | 0>();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<formValues>({
    resolver: productValidationResolver,
  });
  const handleProductSubmit = (data: formValues) => {
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
      //   bgcolor={colors.amber[100]}
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
        // bgcolor={colors.green[200]}
        gap={3}
      >
        <FormHeader title="Add Product" />
        <MediaCard />
        <TitleDescriptionCard />
        <FormCard>
          <FormCardItem size={{ xs: 12 }}>
            <Stack width={"100%"} direction="row" spacing={1}>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <CategoriesSelect
                  setCatagories={setCatagories}
                  catagories={catagories}
                />
              </Box>
              {/* Sub Catagories */}
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <SubCatagories catagories={catagories} />
              </Box>
            </Stack>
          </FormCardItem>
        </FormCard>
        <AddonsCard />
        <FormCard>
          <FormCardItem size={{ xs: 12 }}>
            <Stack sx={{ width: "100%" }} spacing={1} direction="column" p={1}>
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
              >
                <InputLabel htmlFor="pickable">
                  Available for pickup ?{" "}
                </InputLabel>
                <Select
                  id="pickable"
                  value={pickable}
                  onChange={(event: SelectChangeEvent<typeof pickable>) => {
                    const {
                      target: { value },
                    } = event;
                    setPickable(value);
                  }}
                >
                  <MenuItem value={1}>yes</MenuItem>
                  <MenuItem value={0}>no</MenuItem>
                </Select>
                {/*  */}
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
              >
                <InputLabel>Does this product have variants?</InputLabel>
                <Select
                  id="pickable"
                  value={hasVariants}
                  onChange={(event: SelectChangeEvent<typeof hasVariants>) => {
                    const {
                      target: { value },
                    } = event;
                    setHasVariants(value);
                  }}
                >
                  <MenuItem value={1}>yes</MenuItem>
                  <MenuItem value={0}>no</MenuItem>
                </Select>
              </Box>
            </Stack>
          </FormCardItem>
        </FormCard>
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
