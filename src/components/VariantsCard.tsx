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
import React, { FC, useState } from "react";
import { FormCard, FormCardItem } from "./FormCard";
import { formHookType, variantOption } from "../shared/types";
import { Controller } from "react-hook-form";
type props = {
  formHook: formHookType;
};
const VariantsCard: FC<props> = ({ formHook }: props) => {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [typedValue, setTypedValue] = useState("");
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
          name="addons"
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
                    <Autocomplete
                      options={options}
                      fullWidth
                      sx={{ py: 0 }}
                      // value={selectedOption}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          value={typedValue}
                          // onChange={(e) => {
                          //   setTypedValue(() => e.target.value);
                          //   console.log(typedValue);
                          // }}
                          sx={{ py: "2px" }}
                          placeholder={"Select Addon"}
                          variant="outlined"
                        />
                      )}
                      onChange={onChange}
                      placeholder="Option name"
                    />
                  </Box>
                  <Box>
                    <InputLabel htmlFor="options">Values</InputLabel>
                    <TextField placeholder="Value" />
                  </Box>
                  <Box height={"100%"}>
                    <IconButton
                      // onClick={() => {
                      //   console.log(options, value);
                      // }}
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
              </>
            );
          }}
        />

        <Box sx={{ p: 2, gap: 1, display: "flex", flexWrap: "wrap" }}>
          {/* <Chip label="Red" onDelete={() => {}} /> */}
        </Box>
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
