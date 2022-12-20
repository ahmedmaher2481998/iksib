import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { FC, useState } from "react";
import VariantsCard from "./VariantsCard";
import { FormCard, FormCardItem } from "./FormCard";
import { formHookType, formValues } from "../shared/types";
import PricingComponent from "./PricingComponent";
type props = {
  formHook: formHookType;
};
const SelectionPickableAndVariants: FC<props> = ({ formHook }: props) => {
  const { errors, register } = formHook;
  const [showHasVariants, setShowHasVariants] = useState<Boolean | null>(null);
  return (
    <>
      <FormCard>
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
              <FormHelperText>{errors.pickable?.message}</FormHelperText>
              <Select
                id="pickable"
                // value={pickable}
                {...register("pickable")}
                error={Boolean(errors.pickable)}
                // onChange={(event: SelectChangeEvent<typeof pickable>) => {
                //   const {
                //     target: { value },
                //   } = event;
                //   setPickable(value);
                // }}
              >
                <MenuItem value={true as any}>yes</MenuItem>
                <MenuItem value={false as any}>no</MenuItem>
              </Select>
              {/*  */}
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <InputLabel>Does this product have variants?</InputLabel>
              <FormHelperText>{errors.has_varaiations?.message}</FormHelperText>
              <Select
                id="pickable"
                //   error
                // value={hasVariants}
                {...register("has_varaiations")}
                error={Boolean(errors.has_varaiations)}

                // onChange={(event: SelectChangeEvent<Omit<typeof hasVariants,''>>) => {
                //   const {
                //     target: { value },
                //   } = event;
                //   setHasVariants(value);
                // }}
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
            </Box>
          </Stack>
        </FormCardItem>
      </FormCard>

      {showHasVariants === true && <VariantsCard />}
      {showHasVariants === false && <PricingComponent formHook={formHook} />}
    </>
  );
};

export default SelectionPickableAndVariants;
