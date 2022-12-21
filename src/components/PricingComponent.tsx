import { colors, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { FormCard, FormCardItem } from "./FormCard";
import { formHookType, formValues } from "../shared/types";
import { Controller } from "react-hook-form";
import LocationListComponent from "./LocationListComponent";
type props = {
  formHook: formHookType;
};
const PricingComponent = ({ formHook }: props) => {
  return (
    <>
      <FormCard>
        <FormCardItem size={{ xs: 12 }}>
          <Typography fontSize={18} pb={1}>
            Pricing
          </Typography>
          <Stack
            pb={1}
            borderBottom={"2px solid"}
            sx={{ borderBottomColor: colors.grey[200] }}
            spacing={1}
            direction="column"
          >
            <Box sx={{ width: "100%" }}>
              <InputLabel sx={{ fontSize: 16, pb: 0.5 }}>Price</InputLabel>
              <Controller
                control={formHook.control}
                name="pricing.price"
                render={({
                  field: { name, onChange, value },
                  formState: { errors },
                }) => (
                  <TextField
                    fullWidth
                    error={Boolean(errors.pricing?.price)}
                    helperText={errors.pricing?.price?.message}
                    placeholder="KWD 0.00"
                    variant="outlined"
                  />
                )}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <InputLabel sx={{ fontSize: 16, pb: 0.5 }}>Sale price</InputLabel>
              <Controller
                control={formHook.control}
                name="pricing.salePrice"
                render={({
                  field: { name, onChange, value },
                  formState: { errors },
                }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    error={Boolean(errors.pricing?.salePrice)}
                    helperText={errors.pricing?.salePrice?.message}
                    placeholder="KWD 0.00"
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Stack>
          <Box sx={{ width: "100%" }}>
            <InputLabel sx={{ fontSize: 16, pb: 0.5 }}>
              Cost per Item
            </InputLabel>
            <Controller
              control={formHook.control}
              name="pricing.salePrice"
              render={({ formState: { errors } }) => (
                <TextField
                  error={Boolean(errors.pricing?.costPerItem)}
                  fullWidth
                  placeholder="KWD 0.00"
                  helperText={
                    errors.pricing?.costPerItem?.message ||
                    "Customer's won't see this"
                  }
                  variant="outlined"
                />
              )}
            />
          </Box>
        </FormCardItem>
      </FormCard>
      <FormCard>
        <FormCardItem size={{ xs: 12 }}>
          <Typography fontSize={18} pb={1}>
            Inventory
          </Typography>
          <Stack
            pb={1}
            borderBottom={"2px solid"}
            sx={{ borderBottomColor: colors.grey[200] }}
            spacing={1}
            direction="column"
          >
            <Box sx={{ width: "100%" }}>
              <InputLabel sx={{ fontSize: 16, pb: 0.5 }}>
                SKU (Stock Keeping Unit)
              </InputLabel>

              <Controller
                control={formHook.control}
                name="pricing.sku"
                render={({ formState: { errors } }) => (
                  <TextField
                    error={Boolean(errors.pricing?.sku)}
                    fullWidth
                    placeholder="KWD 0.00"
                    helperText={errors.pricing?.sku?.message}
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Stack>
        </FormCardItem>
        <Box p={1} width={"100%"}>
          <Typography fontSize={18} pb={1}>
            Locations
          </Typography>
        </Box>
        <Grid p={2} container justifyContent={"space-between"} gap={1}>
          <LocationListComponent formHook={formHook} />
        </Grid>
      </FormCard>
    </>
  );
};
export default PricingComponent;
