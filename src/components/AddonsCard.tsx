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
import React, { useEffect, useState } from "react";
import { FormCard, FormCardItem } from "./FormCard";
import { addOns } from "../data";
import { Box } from "@mui/system";
import { Clear } from "@mui/icons-material";
const AddonsCard = () => {
  const [lastSelected, setLastSelected] = useState<typeof testValue | null>(
    null
  );
  const [inputValue, setInputValue] = React.useState("");
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  useEffect(() => {}, [lastSelected]);
  const testValue = {
    label: "",
    id: 0,
    price: 0,
    name: "",
  };
  return (
    <FormCard>
      <FormCardItem size={{ xs: 12 }}>
        <Box sx={{ width: "100%" }}>
          <InputLabel sx={{ color: "black", mb: 1, width: "100%" }}>
            Addons
          </InputLabel>
          <Autocomplete
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
            options={addOns.map((a) => {
              const b = { ...a, label: "" };
              b.label = a.name;
              return b;
            })}
            sx={{ width: 300 }}
            renderInput={(params) => {
              return <TextField {...params} placeholder="search Addons" />;
            }}
          />
          {/* <Autocomplete
          //   value={""}
          //   onChange={(event: any, newValue: string | null) => {
          //     console.log(
          //       "🚀 ~ file: AddonsCard.tsx:15 ~ AddonsCard ~ newValue",
          //       newValue
          //     );
          //     const selected = addOns.find((addon) => addon.name === newValue);
          //     const newSelect = selectedAddons ? [...selectedAddons] : [];
          //     if (selected) {
          //       newSelect.push(selected?.id);
          //       setSelectedAddons(newSelect);
          //     }

          //     // setAddons((v) => [...v, newValue]);
          //   }}
          //   inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={addOns.map((a) => {
            if (selectedAddons && !selectedAddons.includes(a.id)) {
              const b = { ...a, label: "" };
              b.label = a.name;
              return b;
            }
          })}
          sx={{ width: 300 }}
          renderInput={(params) => {
            console.log(
              "🚀 ~ file: AddonsCard.tsx:32 ~ AddonsCard ~ params",
              params
            );
            return <TextField {...params} placeholder="Search addOns" />;
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
          {addOns.map((addon) => {
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
                      const newSelected = selectedAddons.filter(
                        (id) => id === addon.id
                      );
                      if (newSelected.includes(addon.id)) setSelectedAddons([]);
                      else setSelectedAddons(newSelected);
                      console.log(
                        "🚀 ~ file: AddonsCard.tsx:134 ~ {addOns.map ~ newSelected",
                        newSelected,
                        addon.id === newSelected[0]
                      );

                      //   setSelectedAddons((old) =>
                      //     old.filter((id, idx) => {
                      //       if (id === addon.id) {
                      //         return true;
                      //         if (idx === 0) return true;
                      //       }
                      //     })
                      //   );
                    }}
                  >
                    <Clear />
                  </ListItemIcon>
                </ListItem>
              );
            } else {
              return null;
            }
          })}
        </List>
      </FormCardItem>
    </FormCard>
  );
};

export default AddonsCard;
