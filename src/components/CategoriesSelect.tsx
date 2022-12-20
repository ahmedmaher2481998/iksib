import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { categories as categoriesData } from "../data";
import { formHookType } from "../shared/types";
import { getCheckedBoolean } from "../shared/utils";
type props = {
  catagories: number[];
  setCatagories: React.Dispatch<React.SetStateAction<number[]>>;
  formHook: formHookType;
};

const CategoriesSelect: FC<props> = ({
  catagories,
  setCatagories,
  formHook,
}: props) => {
  const { control, errors, getValues, register, setValue } = formHook;
  // const handleCatagoriesChange = (
  //   event: SelectChangeEvent<typeof catagories>
  // ) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   console.log(value);
  //   setCatagories(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  return (
    <>
      <InputLabel sx={{ color: "black", pl: 1 }}>Catagories</InputLabel>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <Controller
          name="categories"
          control={control}
          render={({
            formState: { errors },
            field: { onChange, value, name },
            fieldState: { isTouched },
          }) => {
            return (
              <FormControl>
                <FormHelperText>
                  {isTouched && errors.categories?.message}
                </FormHelperText>
                <Select
                  multiple
                  error={Boolean(errors.categories)}
                  value={catagories}
                  onChange={(e: any) => {
                    setCatagories(e.target.value as number[]);
                    setValue("categories", e.target.value);
                  }}
                  renderValue={(selected) => {
                    console.log(
                      "🚀 ~ file: CategoriesSelect.tsx:56 ~ selected",
                      selected
                    );

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
              </FormControl>
            );
          }}
        />
      </FormControl>
    </>
  );
};

export default CategoriesSelect;
