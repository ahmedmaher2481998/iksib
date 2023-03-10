import { Add, Close } from "@mui/icons-material";
import {
  Autocomplete,
  Chip,
  colors,
  IconButton,
  InputLabel,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { FormCard, FormCardItem } from "./FormCard";
import {
  formHookType,
  productFormValues,
  variantOption,
} from "../../shared/types";
import { Controller } from "react-hook-form";
type props = {
  formHook: formHookType<productFormValues>;
};
const getOptionFromValue = ({
  options,
  value,
}: {
  options: variantOption[];
  value: string;
}) => {
  return options.find((opt) => opt.name === value);
};
const VariantsCard: FC<props> = ({ formHook }: props) => {
  const { control, setValue } = formHook;
  const [options, setOptions] = useState<variantOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<variantOption>();
  const [variantValue, setVariantValue] = useState("");
  const [optionInputValue, setOptionInputValue] = useState("");
  const [chips, setChips] = useState<JSX.Element[]>([]);
  useEffect(() => {
    setValue("attributes", options);
  }, [options]);
  // FIXME
  const handlingAddedValues = () => {
    // make sure to get the current typed value from the autoComplete
    // optionInputValue
    // check if option exists /
    // yes => check if there's variant value with the same current variant value/
    // yes=> don't add value prompt existing value/
    // no => add variant value to the the option array of values
    //no => add option && add variant value  if not ====''
    if (optionInputValue !== "") {
      const option = getOptionFromValue({ options, value: optionInputValue });
      const newOptions = [...options];
      // option already exist
      if (option) {
        // entering new variant value if not empty nor exist in values array
        if (
          variantValue !== "" &&
          !option?.values?.some((val) => val === variantValue)
        ) {
          newOptions.forEach((opt) => {
            if (opt.name === option.name) {
              opt.values?.push(variantValue);
            }
          });
          setOptions(newOptions);
        }
      } else {
        if (options.length === 4) return;
        const newOption: variantOption = { name: optionInputValue, values: [] };
        if (variantValue !== "") newOption.values?.push(variantValue);
        newOptions.push(newOption);

        setOptions(newOptions);
      }
    }
  };
  const chipGenerator = () => {
    if (selectedOption) {
      const option = getOptionFromValue({
        options,
        value: selectedOption?.name,
      });

      return option?.values?.map((v) => (
        <Chip
          label={`${v}`}
          key={v}
          onDelete={() => {
            let newOptions = [...options];
            newOptions = newOptions.filter((opt) => {
              if (option.name === opt.name) {
                opt.values = opt.values?.filter((val) => val !== v);

                setSelectedOption(opt);
                return opt;
              } else return opt;
            });
            setOptions(newOptions);
          }}
        />
      ));
    }
  };
  useEffect(() => {
    const newChips = chipGenerator() || [];
    setChips(() => newChips);
  }, [options, variantValue, optionInputValue]);
  return (
    <Controller
      control={control}
      name="attributes"
      render={() => {
        return (
          <>
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
                <Stack direction={"row"} spacing={1} alignItems="center">
                  <Box mr={1}>
                    <InputLabel sx={{ fontSize: 18 }} htmlFor="options">
                      <Stack alignItems={"center"} direction={"row"}>
                        Option name &nbsp;
                        <Typography fontSize={14}>(size,color,etc)</Typography>
                      </Stack>
                    </InputLabel>

                    <Autocomplete
                      value={selectedOption}
                      sx={{ py: 0 }}
                      clearOnBlur={false}
                      options={options.map((option) => option)}
                      getOptionLabel={(opt: variantOption) => opt.name}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(e, v) => {
                        if (options.length === 0) {
                          setSelectedOption(undefined);
                        } else {
                          v && setSelectedOption(v);
                        }
                      }}
                      inputValue={optionInputValue}
                      onInputChange={(event, newInputValue) => {
                        setOptionInputValue(newInputValue);
                      }}
                    />
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
                  {/* Render values selected with first enter */}
                  {chips}
                </Box>
              </FormCardItem>
              <FormCardItem size={{ xs: 12 }}>
                <Typography
                  py={1}
                  fontSize={18}
                  sx={{
                    borderTop: "2px solid",
                    borderTopColor: colors.grey[200],
                  }}
                >
                  Saved Variants
                </Typography>
                <Stack spacing={1}>
                  {options.map((opt) => {
                    return (
                      <ListItem
                        key={opt.name}
                        sx={{ bgcolor: colors.grey[200] }}
                        secondaryAction={
                          <IconButton
                            onClick={() => {
                              let newOptions = [...options];
                              newOptions = newOptions.filter(
                                (opt1) => opt1.name !== opt.name
                              );
                              setOptions(newOptions);
                            }}
                            edge="end"
                            aria-label="delete"
                          >
                            <Close sx={{ color: colors.red[400] }} />
                          </IconButton>
                        }
                      >
                        <ListItemText
                          primary={`${opt.name} : ${
                            opt?.values?.join(",") || ""
                          }`}
                        />
                      </ListItem>
                    );
                  })}
                </Stack>
              </FormCardItem>
            </FormCard>
          </>
        );
      }}
    />
  );
};

export default VariantsCard;
