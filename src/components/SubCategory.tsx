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
import { categories as categoriesData } from "../data";
import { CategoryType, formHookType, subCategoryType } from "../shared/types";
import { getCheckedBoolean } from "../shared/utils";
type props = {
  catagories: number[];
  setCatagories: React.Dispatch<React.SetStateAction<number[]>>;
  formHook: formHookType;
};

const SubCategory: FC<props> = ({
  catagories,
  setCatagories,
  formHook,
}: props) => {
  const { control, getValues, register, setValue } = formHook;

  return (
    <>
      <InputLabel sx={{ color: "black", pl: 1 }}>Sub-catagories</InputLabel>
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
                    setCatagories((old) => [
                      ...old,
                      ...(e.target.value as number[]),
                    ]);
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
                  {SubCategoryList(catagories).map((sub) => {
                    return <SubCategoryItem sub={sub} value={value} />;
                  })}
                  {/* {categoriesData.map((category) => {
                    if(catagories?.includes(category.category_id)){
                        const subs=category.sub_categories
return subs.map(sub=>{
   return  
    })

})
          } */}
                </Select>
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
type subCategoryProps = {
  sub: subCategoryType;
  value: number[];
};
const SubCategoryItem = ({ sub, value }: subCategoryProps) => {
  return (
    <MenuItem key={sub.category_id} value={sub.category_id as number}>
      <Checkbox checked={Boolean(getCheckedBoolean(value, sub.category_id))} />
      <ListItemText primary={sub.category_name} />
    </MenuItem>
  );
};
export default SubCategory;
