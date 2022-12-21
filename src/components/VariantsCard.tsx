import { Add, Close } from "@mui/icons-material";
import {
  Autocomplete,
  Chip,
  colors,
  createFilterOptions,
  IconButton,
  Input,
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
const getOptionFromValue = ({
  options,
  value,
}: {
  options: variantOption[];
  value: String;
}) => {
  return options.find((opt) => opt.name === value);
};
const VariantsCard: FC<props> = ({ formHook }: props) => {
  const { control, setValue } = formHook;
  const [options, setOptions] = useState<variantOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<variantOption>();
  const [variantValue, setVariantValue] = useState("");
  const [optionInputValue, setOptionInputValue] = useState("");
  const handlingAddedValues = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("🚀 ~ file: VariantsCard.tsx:28 ~ options", options);
    console.log(
      "🚀 ~ file: VariantsCard.tsx:34 ~ optionInputValue",
      optionInputValue
    );
    console.log("🚀 ~ file: VariantsCard.tsx:32 ~ variantValue", variantValue);
    console.log(
      "🚀 ~ file: VariantsCard.tsx:30 ~ selectedOption",
      selectedOption
    );

    // make sure to get the current typed value from the autoComplete
    // optionInputValue
    // check if option exists /
    // yes => check if there's variant value with the same current variant value/
    // yes=> don't add value prompt existing value/
    // no => add variant value to the the option array of values
    //no => add option && add variant value  if not ====''
    if (optionInputValue !== "") {
      const option = getOptionFromValue({ options, value: optionInputValue });

      // option already exist
      if (option) {
        // entering new variant value if not empty nor exist in values array
        if (
          variantValue !== "" &&
          !option?.values?.some((val) => val === variantValue)
        ) {
          option?.values?.push(variantValue);
          setOptions((old) => [...old, { ...option }]);
        }
      } else {
        if (options.length >= 4) return;
        const newOption: variantOption = { name: optionInputValue };
        if (variantValue !== "") newOption.values = [variantValue];
        setOptions((old) => [...old, { ...newOption }]);
      }
    }
  };
  // Test Values
  // const [option, setOption] = useState<string>("");
  // const [value, setValue] = useState<string>("");
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
          control={control}
          name="attributes"
          render={({
            field: { value, onChange },
            formState: { errors },
            fieldState: {},
          }) => {
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
                    {/* <TextField
                      value={option}
                      onChange={(e) => {
                        const {
                          target: { value: inputValue },
                        } = e;
                        setOption(inputValue);
                      }}
                      placeholder="Option"
                      variant="outlined"
                    /> */}
                    <Autocomplete
                      value={selectedOption}
                      // freeSolo
                      clearOnBlur={false}
                      options={options.map((option) => option)}
                      getOptionLabel={(opt: variantOption) => opt.name}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(e, v) => {
                        console.log("changed", e.target, v);
                        v && setSelectedOption(v);
                      }}
                      inputValue={optionInputValue}
                      onInputChange={(event, newInputValue) => {
                        console.log(newInputValue);
                        setOptionInputValue(newInputValue);
                      }}
                    />

                    {/* <Autocomplete
                      value={selectedOption}
                      sx={{ p: 0 }}
                      onChange={(event, newValue) => {
                        
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
                          if (filtered.length > 4) return;
                          filtered.push({
                            inputValue,
                            name: `${inputValue}`,
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
                      freeSolo
                      renderInput={(params) => (
                        <TextField {...params} sx={{ py: 1 }} />
                      )}
                    /> */}
                  </Box>
                  <Box>
                    <InputLabel htmlFor="options">Values</InputLabel>
                    <TextField
                      value={variantValue}
                      onChange={(e) => setVariantValue(e.target.value)}
                      placeholder="Value"
                      variant="outlined"
                    />
                  </Box>
                  <Box height={"100%"}>
                    <IconButton
                      onClick={handlingAddedValues}
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
                  {/* FIXME */}
                  {/* Render values selected  */}
                  {selectedOption?.values?.map((v) => (
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
