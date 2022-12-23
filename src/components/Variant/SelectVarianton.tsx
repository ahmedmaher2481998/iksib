import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { variantOption } from "../../shared/types";
import { capitalizeFirstLetter } from "../../shared/utils";
import { useAppDispatch } from "../../store/hooks";
import { addSelectedVariation } from "../../store/productSlice";
type props = {
  option: variantOption;
};
const SelectVariation = ({ option }: props) => {
  const [value, setValue] = useState<string>();
  const dispatch = useAppDispatch();
  return (
    <Grid item xs={5}>
      <FormControl sx={{ m: 1, minWidth: "120px", width: "100%" }} size="small">
        <Typography color={"black"}>
          {capitalizeFirstLetter(option.name)}
        </Typography>
        <Select
          onChange={(e) => {
            const { value: newValue } = e.target;
            setValue(newValue);
            dispatch(
              addSelectedVariation({
                name: option.name,
                value: newValue,
              })
            );
          }}
          value={value}
        >
          {option.values?.map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectVariation;
