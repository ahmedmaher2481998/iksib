import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { FC, useState } from "react";
import VariantsCard from "./VariantsCard";
import { FormCard, FormCardItem } from "./FormCard";
import { formHookType, productFormValues } from "../../shared/types";
import PricingComponent from "./PricingComponent";
import { Controller } from "react-hook-form";
type props = {
  formHook: formHookType<productFormValues>;
};
const SelectionPickableAndVariants: FC<props> = ({ formHook }: props) => {
  const [showHasVariants, setShowHasVariants] = useState<boolean | null>(null);
  return (
    <>
      <FormCard>
        productFormValues
        <FormCardItem size={{ xs: 12 }}>
          <Stack sx={{ width: "100%" }} spacing={1} direction="column" p={1}>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <InputLabel htmlFor="pickable">
                Available for pickup ?{" "}
              </InputLabel>
              <Controller
                name="pickable"
                control={formHook.control}
                render={({
                  field: { value, onChange },
                  formState: { errors },
                }) => {
                  return (
                    <>
                      <FormHelperText>
                        {errors.pickable?.message}
                      </FormHelperText>
                      <Select
                        value={value}
                        onChange={onChange}
                        sx={{ minWidth: "80px" }}
                        id="pickable"
                        error={Boolean(errors.pickable)}
                      >
                        <MenuItem value={true as any}>yes</MenuItem>
                        <MenuItem value={false as any}>no</MenuItem>
                      </Select>
                    </>
                  );
                }}
              />
              {/*  */}
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <InputLabel>Does this product have variants?</InputLabel>
              <Controller
                name="has_varaiations"
                control={formHook.control}
                render={({
                  field: { value, onChange },
                  formState: { errors },
                }) => {
                  return (
                    <>
                      <FormHelperText>
                        {errors.has_varaiations?.message}
                      </FormHelperText>
                      <Select
                        sx={{ minWidth: "80px" }}
                        error={Boolean(errors.has_varaiations)}
                        value={value}
                        onChange={onChange}
                      >
                        <MenuItem
                          onClick={() => setShowHasVariants(true)}
                          value={true as any}
                        >
                          yes
                        </MenuItem>
                        <MenuItem
                          onClick={() => setShowHasVariants(false)}
                          value={false as any}
                        >
                          no
                        </MenuItem>
                      </Select>
                    </>
                  );
                }}
              />
            </Box>
          </Stack>
        </FormCardItem>
      </FormCard>

      {showHasVariants === true && <VariantsCard formHook={formHook} />}
      {showHasVariants === false && <PricingComponent formHook={formHook} />}
    </>
  );
};

export default SelectionPickableAndVariants;
