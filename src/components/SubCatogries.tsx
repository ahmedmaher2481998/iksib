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
import { categories as data } from "../data";
type props = { catagories: string[] };
const SubCatagories: FC<props> = ({ catagories }: props) => {
  const [subCatagories, setSubCatagories] = React.useState<string[]>([]);
  const handleCatagoriesChange = (
    event: SelectChangeEvent<typeof subCatagories>
  ) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setSubCatagories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const SubCategoryList = ({ id }: { id: string }) => {
    const selectedCategory = data.find((c) => `${c.category_id}` === id);
    let list = selectedCategory?.sub_categories.map((sub) => {
      return (
        <MenuItem key={sub.category_id} value={`${sub.category_id}`}>
          <Checkbox
            checked={subCatagories.indexOf(`${sub.category_id}`) > -1}
          />
          <ListItemText primary={sub.category_name} />
        </MenuItem>
      );
    });
    if (Boolean(list?.length)) return list;
    else return null;
  };
  return (
    <>
      <InputLabel sx={{ color: "black" }}>Sub-catagories</InputLabel>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <Select
          multiple
          value={subCatagories}
          onChange={handleCatagoriesChange}
          renderValue={(selected) => {
            const valuesTemp: string[] = [];
            data.map((c) => {
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
          {catagories.map((id) => {
            return <SubCategoryList id={id} />;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SubCatagories;
