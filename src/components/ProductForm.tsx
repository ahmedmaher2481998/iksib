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
} from "@mui/material";
import React from "react";
import { ArrowBack } from "@mui/icons-material";
import FormHeader from "./FormHeader";
import { FormCard, FormCardItem } from "./FormCard";
import { productValidationResolver } from "../shared/validation/productValidation";
import { useForm } from "react-hook-form";
import { categories as categoriesData } from "../data";

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
  const [catagories, setCatagories] = React.useState<string[]>([]);
  const [subCatagories, setSubCatagories] = React.useState<string[]>([]);

  const handleCatagoriesChange = (
    event: SelectChangeEvent<typeof catagories>
  ) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setCatagories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
        <FormCard>
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
        </FormCard>
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

        <FormCard>
          <FormCardItem size={{ xs: 12 }}>
            <Stack width={"100%"} direction="row" spacing={1}>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <InputLabel sx={{ color: "black" }}>Catagories</InputLabel>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <Select
                    multiple
                    value={catagories}
                    onChange={handleCatagoriesChange}
                    renderValue={(selected) => {
                      const valuesTemp: string[] = [];
                      categoriesData.map((c) => {
                        if (selected.includes(c.category_id + "")) {
                          valuesTemp.push(c.category_name);
                        }
                      });
                      return valuesTemp.join(",");
                    }}
                    placeholder="Select category"
                    MenuProps={{}}
                  >
                    {categoriesData.map((category) => (
                      <MenuItem
                        key={category.category_id}
                        value={`${category.category_id}`}
                      >
                        <Checkbox
                          checked={
                            catagories.indexOf(`${category.category_id}`) > -1
                          }
                        />
                        <ListItemText primary={category.category_name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              {/* Sub Catagories */}
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <InputLabel sx={{ color: "black" }}>Sub-catagories</InputLabel>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <Select
                    multiple
                    value={subCatagories}
                    onChange={handleCatagoriesChange}
                    renderValue={(selected) => {
                      const valuesTemp: string[] = [];
                      categoriesData.map((c) => {
                        if (catagories.includes(`${c.category_id}`)) {
                          c.sub_categories.map((sub) => {
                            if (subCatagories.includes(`${sub.category_id}`))
                              valuesTemp.push(sub.category_name);
                          });
                        }
                      });
                      return valuesTemp.join(",");
                    }}
                    placeholder="Select sub-category"
                    MenuProps={{}}
                  >
                    {catagories.map((categoryId) => {
                      const selectedCategory = categoriesData.find(
                        (c) => `${c.category_id}` === categoryId
                      );

                      const list = selectedCategory?.sub_categories.map(
                        (sub) => {
                          <MenuItem
                            key={sub.category_id}
                            value={`${sub.category_id}`}
                          >
                            <Checkbox
                              checked={
                                catagories.indexOf(`${sub.category_id}`) > -1
                              }
                            />
                            <ListItemText primary={sub.category_name} />
                          </MenuItem>;
                        }
                      );
                      return list ? list : <p>no</p>;
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </FormCardItem>
        </FormCard>
      </Box>
    </Box>
  );
};

export default ProductForm;
