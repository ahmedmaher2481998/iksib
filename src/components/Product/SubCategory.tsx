import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import React, { FC, useState } from "react";
import { Controller } from "react-hook-form";
import { categories as categoriesData } from "../../data";
import {
  formHookType,
  productFormValues,
  subCategoryType,
} from "../../shared/types";
import { getCheckedBoolean } from "../../shared/utils";

type props = {
  catagories: number[];

  formHook: formHookType<productFormValues>;
};

const SubCategory: FC<props> = ({ catagories, formHook }: props) => {
  const { control, setValue } = formHook;
  const [subCategory, setSubCategory] = useState<number[]>([]);

  return (
    <>
      <InputLabel sx={{ color: "black", pl: 1 }}>Sub-catagories</InputLabel>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <Controller
          name="sub_categories"
          control={control}
          render={({ formState: { errors }, field: { value } }) => {
            return (
              <FormControl error={Boolean(errors.sub_categories)}>
                <Select
                  multiple
                  error={Boolean(errors.sub_categories)}
                  value={subCategory}
                  onChange={(e) => {
                    setSubCategory(() => e.target.value as number[]);
                    setValue("sub_categories", e.target.value as number[]);
                  }}
                  renderValue={(selected) => {
                    const subs = SubCategoryList(catagories);
                    const selectedSubs = subs.map((sub) => {
                      if (selected?.includes(sub.category_id)) {
                        return sub.category_name;
                      }
                    });

                    return selectedSubs?.join(",");
                  }}
                  placeholder="Select Sub-category"
                >
                  {SubCategoryList(catagories).map((sub) => {
                    return (
                      <MenuItem key={sub.category_id} value={sub.category_id}>
                        <Checkbox
                          checked={Boolean(
                            getCheckedBoolean(value, sub.category_id)
                          )}
                        />
                        <ListItemText primary={sub.category_name} />
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>
                  {errors.sub_categories?.message}
                </FormHelperText>
              </FormControl>
            );
          }}
        />
      </FormControl>
    </>
  );
};
const SubCategoryList = (categories: number[]) => {
  const values: subCategoryType[] = [];
  const list = categoriesData.map((cat) => {
    if (categories.includes(cat.category_id)) return cat;
  });
  list.forEach((subs) => {
    subs?.sub_categories.map((sub) => values.push(sub));
  });
  return values;
};
export default SubCategory;
