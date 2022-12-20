import {
  Autocomplete,
  colors,
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
import { addOns } from "../data";
import { Box } from "@mui/system";
import { Clear } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import { addonType, formHookType } from "../shared/types";
type props = {
  formHook: formHookType;
};
const AddonsCard: FC<props> = ({ formHook }: props) => {
  const { getValues, control, errors, setValue } = formHook;
  const selectedAddons = getValues().addons;
  // const [lastSelected, setLastSelected] = useState<typeof testValue | null>(
  //   null
  // );
  // const [options, setOptions] = useState(
  //   addOns.map((a) => {
  //     const b = { ...a, label: "" };
  //     b.label = a.name;
  //     return b;
  //   })
  // );
  // const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  // useEffect(() => {
  //   options.map((addon) => {
  //     if (!selectedAddons.includes(addon.id)) return addon;
  //   });
  // }, [selectedAddons]);
  // const [inputValue, setInputValue] = React.useState("");
  // useEffect(() => {}, [lastSelected]);
  // const testValue = {
  //   label: "",
  //   id: 0,
  //   price: 0,
  //   name: "",
  // };
  return (
    <FormCard>
      <FormCardItem size={{ xs: 12 }}>
        <Box sx={{ width: "100%" }}>
          <InputLabel sx={{ color: "black", mb: 1, width: "100%" }}>
            Addons
          </InputLabel>
          {/*  */}
          <>
            <Controller
              name="addons"
              control={control}
              render={({
                fieldState: { error },
                formState: {},
                field: { onChange },
              }) => (
                <Autocomplete
                  multiple
                  options={addOns}
                  getOptionLabel={(addon: addonType) => addon.name}
                  // renderOption={(option: addonType) => (
                  //   <ListItem>
                  //     <ListItemText>{option.name}</ListItemText>
                  //   </ListItem>
                  // )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country"
                      variant="outlined"
                    />
                  )}
                  onChange={(e, data) => onChange(data)}
                  // {...props}
                />
              )}
              // onChange={([, data]) => data}
            />
          </>
          {/*  */}
          {/* <Autocomplete
            value={lastSelected}
            fullWidth
            onChange={(e: any, value: any) => {
              if (!selectedAddons.includes(value.id)) {
                setSelectedAddons((old) => [...old, value?.id]);
              }
              setLastSelected(testValue);
              console.log(selectedAddons);
            }}
            //   disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => {
              return <TextField {...params} placeholder="search Addons" />;
            }}
          /> */}
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
          {Boolean(selectedAddons.length) && (
            <Typography fontSize={18} fontWeight="bold">
              Saved Addons:{" "}
            </Typography>
          )}
          {getValues().addons?.map((addon) => {
            return (
              <>
                <ListItem
                  key={addon.id}
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
                  <ListItemText>{addon.name}</ListItemText>
                  <ListItemIcon
                    sx={{ cursor: "pointer" }}
                    onClick={(e) => {
                      setValue(
                        "addons",
                        getValues().addons.filter((item) => {
                          if (item.id === addon.id) return false;
                        })
                      );
                      // const newSelected = selectedAddons.filter(
                      //   (id) => id === addon.id
                      // );
                      // if (
                      //   newSelected.includes(addon.id) &&
                      //   newSelected.indexOf(addon.id) === 0
                      // )
                      //   setSelectedAddons([]);
                      // else setSelectedAddons(newSelected);
                      // console.log(
                      //   "🚀 ~ file: AddonsCard.tsx:134 ~ {addOns.map ~ newSelected",
                      //   newSelected,
                      //   addon.id === newSelected[0]
                      // );
                    }}
                  >
                    <Clear />
                  </ListItemIcon>
                </ListItem>
              </>
            );
          })}
          {/* {addOns.map((addon) => {
            if (selectedAddons.includes(addon.id)) {
              return (
                <ListItem
                  key={addon.id}
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
                  <ListItemText>{addon.name}</ListItemText>
                  <ListItemIcon
                    sx={{ cursor: "pointer" }}
                    onClick={(e) => {
                      // const newSelected = selectedAddons.filter(
                      //   (id) => id === addon.id
                      // );
                      // if (
                      //   newSelected.includes(addon.id) &&
                      //   newSelected.indexOf(addon.id) === 0
                      // )
                      //   setSelectedAddons([]);
                      // else setSelectedAddons(newSelected);
                      // console.log(
                      //   "🚀 ~ file: AddonsCard.tsx:134 ~ {addOns.map ~ newSelected",
                      //   newSelected,
                      //   addon.id === newSelected[0]
                      // );
                    }}
                  >
                    <Clear />
                  </ListItemIcon>
                </ListItem>
              );
            } else {
              return null;
            }
          })} */}
        </List>
      </FormCardItem>
    </FormCard>
  );
};

export default AddonsCard;
