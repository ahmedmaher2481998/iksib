import {
  Autocomplete,
  colors,
  FormControl,
  FormHelperText,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { FormCard, FormCardItem } from "./FormCard";
import { addOns } from "../../data";
import { Box } from "@mui/system";
import { Clear } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import { addonType, formHookType } from "../../shared/types";
type props = {
  formHook: formHookType;
};
const AddonsCard: FC<props> = ({ formHook }: props) => {
  const { getValues, control, errors, setValue } = formHook;

  return (
    <FormCard>
      {/*  */}
      <>
        <Controller
          name="addons"
          control={control}
          render={({
            fieldState: {},
            formState: { errors },
            field: { onChange, value },
          }) => (
            <>
              <FormCardItem size={{ xs: 12 }}>
                <Box sx={{ width: "100%" }}>
                  <InputLabel sx={{ color: "black", mb: 1, width: "100%" }}>
                    Addons
                  </InputLabel>
                  <FormControl fullWidth error={Boolean(errors.addons)}>
                    <Autocomplete
                      multiple={true}
                      filterSelectedOptions
                      value={value}
                      options={addOns}
                      getOptionLabel={(addon: addonType) => addon.name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder={
                            Boolean(value?.length) ? "Select Addon" : ""
                          }
                          variant="outlined"
                        />
                      )}
                      onChange={(e, data) => onChange(data)}
                    />
                    <FormHelperText>{errors.addons?.message}</FormHelperText>
                  </FormControl>
                </Box>
              </FormCardItem>

              <FormCardItem size={{ xs: 12 }}>
                <List
                  sx={{
                    width: "100%",
                    borderTop: "2px solid",
                    borderTopColor: colors.grey[200],
                    mt: 1,
                  }}
                >
                  {Boolean(value?.length) && (
                    <Typography fontSize={18} fontWeight="bold">
                      Saved Addons:
                    </Typography>
                  )}
                  {value?.map((item) => {
                    return (
                      <ListItem
                        key={item.id}
                        sx={{
                          mt: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          px: 2,
                          borderRadius: 2,
                          bgcolor: colors.grey[100],
                        }}
                      >
                        <ListItemText>{item.name}</ListItemText>
                        <ListItemIcon
                          sx={{ cursor: "pointer" }}
                          onClick={(e) => {
                            const newValue = value.filter(
                              (i) => i.id !== item.id
                            );
                            setValue("addons", newValue);
                            onChange(newValue);
                          }}
                        >
                          <Clear />
                        </ListItemIcon>
                      </ListItem>
                    );
                  })}
                </List>
              </FormCardItem>
            </>
          )}
        />
      </>
    </FormCard>
  );
};

export default AddonsCard;
