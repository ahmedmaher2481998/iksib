import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { FC } from "react";
import { categories as categoriesData } from "../data";
type props = {
  catagories: string[];
  setCatagories: React.Dispatch<React.SetStateAction<string[]>>;
};
const CategoriesSelect: FC<props> = ({ catagories, setCatagories }: props) => {
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

  return (
    <>
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
                checked={catagories.indexOf(`${category.category_id}`) > -1}
              />
              <ListItemText primary={category.category_name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CategoriesSelect;
