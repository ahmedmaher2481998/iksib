import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { categories as categoriesData } from "../../data";
import { formHookType, productFormValues } from "../../shared/types";
import { getCheckedBoolean } from "../../shared/utils";
type props = {
  catagories: number[];
  setCatagories: React.Dispatch<React.SetStateAction<number[]>>;
  formHook: formHookType<productFormValues>;
};

const CategoriesSelect: FC<props> = ({
  catagories,
  setCatagories,
  formHook,
}: props) => {
  const { control, setValue } = formHook;

  return (
    <>
      <InputLabel sx={{ color: "black", pl: 1 }}>Catagories</InputLabel>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <Controller
          name="categories"
          control={control}
          render={({ formState: { errors }, field: { value } }) => {
            return (
              <FormControl error={Boolean(errors.categories)}>
                <Select
                  multiple
                  error={Boolean(errors.categories)}
                  value={catagories}
                  onChange={(e) => {
                    setCatagories(e.target.value as number[]);
                    setValue("categories", e.target.value as number[]);
                  }}
                  renderValue={(selected) => {
                    const selectedCats = categoriesData.filter((item) =>
                      selected.includes(item.category_id)
                    );
                    return selectedCats.map((i) => i.category_name).join(",");
                  }}
                  placeholder="Select category"
                  MenuProps={{}}
                >
                  {categoriesData.map((category) => (
                    <MenuItem
                      key={category.category_id}
                      value={category.category_id as number}
                    >
                      <Checkbox
                        checked={Boolean(
                          getCheckedBoolean(value, category.category_id)
                        )}
                      />
                      <ListItemText primary={category.category_name} />
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.categories?.message}</FormHelperText>
              </FormControl>
            );
          }}
        />
      </FormControl>
    </>
  );
};

export default CategoriesSelect;
