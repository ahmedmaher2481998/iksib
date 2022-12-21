import { Add, Close } from "@mui/icons-material";
import {
  Autocomplete,
  Chip,
  colors,
  createFilterOptions,
  IconButton,
  InputLabel,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { FC, useState } from "react";
import { FormCard, FormCardItem } from "./FormCard";
import { formHookType, variantOption } from "../shared/types";
import { Controller } from "react-hook-form";
type props = {
  formHook: formHookType;
};
const filter = createFilterOptions<variantOption>();

const VariantsCard: FC<props> = ({ formHook }: props) => {
  // const [options, setOptions] = useState<variantOption[]>([]);
  // const [selectedOption, setSelectedOption] = useState<variantOption>();
  // const [typedValue, setTypedValue] = useState("");
  const [option, setOption] = useState<string>("");
  const [value, setValue] = useState<string>("");
  return (
    <FormCard>
      <FormCardItem size={{ xs: 12 }}>
        <Typography
          fontSize={18}
          sx={{ color: "black" }}
          fontWeight="semibold"
          mb={2}
        >
          Variants
        </Typography>
        <Controller
          control={formHook.control}
          name="attributes"
          render={({ field: { value, onChange }, formState: { errors } }) => {
            return (
              <>
                <Stack direction={"row"} spacing={1} alignItems="center">
                  <Box mr={1}>
                    <InputLabel sx={{ fontSize: 18 }} htmlFor="options">
                      <Stack alignItems={"center"} direction={"row"}>
                        Option name &nbsp;
                        <Typography fontSize={14}>(size,color,etc)</Typography>
                      </Stack>
                    </InputLabel>
                    <TextField placeholder="Option" variant="outlined" />

                    {/* <Autocomplete
                      value={selectedOption}
                      sx={{ p: 0 }}
                      onChange={(event, newValue) => {
                        console.log(newValue);
                        if (typeof newValue === "string") {
                          setSelectedOption({
                            name: newValue,
                          });
                        } else if (newValue && newValue.inputValue) {
                          // Create a new value from the user input
                          console.log("newValue", newValue);
                          // setOptions((old) => [
                          //   ...old,
                          //   {
                          //     name: newValue.inputValue,
                          //   },
                          // ]);
                        } else {
                          // setSelectedOption(newValue);
                        }
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some(
                          (option) => inputValue === option.name
                        );
                        if (inputValue !== "" && !isExisting) {
                          filtered.push({
                            inputValue,
                            name: `Add "${inputValue}"`,
                          });
                        }

                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      handleHomeEndKeys
                      options={options}
                      getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === "string") {
                          return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                          return option.inputValue;
                        }
                        // Regular option
                        return option.name;
                      }}
                      renderOption={(props, option) => (
                        <li {...props}>{option.name}</li>
                      )}
                      sx={{ width: 300 }}
                      freeSolo
                      renderInput={(params) => (
                        <TextField {...params} sx={{ py: 1 }} />
                      )}
                    /> */}
                  </Box>
                  <Box>
                    <InputLabel htmlFor="options">Values</InputLabel>
                    <TextField placeholder="Value" variant="outlined" />
                  </Box>
                  <Box height={"100%"}>
                    <IconButton
                      sx={{
                        mt: 3,
                        ml: 2,
                        border: "2px solid",
                        borderColor: colors.grey[100],
                      }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                </Stack>
                <Box sx={{ p: 2, gap: 1, display: "flex", flexWrap: "wrap" }}>
                  {value
                    ?.find((v) => v.name === option)
                    ?.values?.map((v) => (
                      <Chip label={`${v}`} onDelete={() => {}} />
                    ))}
                  {/* <Chip label="Red" onDelete={() => {}} /> */}
                </Box>
              </>
            );
          }}
        />
      </FormCardItem>
      <FormCardItem size={{ xs: 12 }}>
        <Typography
          py={1}
          fontSize={18}
          sx={{ borderTop: "2px solid", borderTopColor: colors.grey[200] }}
        >
          Saved Variants
        </Typography>
        <Stack>
          <ListItem
            sx={{ bgcolor: colors.grey[200] }}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Close sx={{ color: colors.red[400] }} />
              </IconButton>
            }
          >
            <ListItemText primary="Colors : Red,Blue,Green,Black,White,Brown,Pink," />
          </ListItem>
        </Stack>
      </FormCardItem>
    </FormCard>
  );
};

export default VariantsCard;
