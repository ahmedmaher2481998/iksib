import { Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { formHookType, variantsFormValues } from "../../shared/types";

const VariantLocationListComponent = ({
  formHook,
}: {
  formHook: formHookType<variantsFormValues>;
}) => {
  return (
    <>
      <Grid item xs={5}>
        <InputLabel>location 1</InputLabel>
        <Controller
          control={formHook.control}
          name={`inventory.location1`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.inventory?.location1?.message}
                error={Boolean(errors.inventory?.location1)}
                fullWidth
                variant="outlined"
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <InputLabel>location 2</InputLabel>
        <Controller
          control={formHook.control}
          name={`inventory.location2`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.inventory?.location2?.message}
                error={Boolean(errors.inventory?.location2)}
                fullWidth
                variant="outlined"
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <InputLabel>location 3</InputLabel>
        <Controller
          control={formHook.control}
          name={`inventory.location3`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.inventory?.location3?.message}
                error={Boolean(errors.inventory?.location3)}
                fullWidth
                variant="outlined"
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <InputLabel>location 4</InputLabel>
        <Controller
          control={formHook.control}
          name={`inventory.location4`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.inventory?.location4?.message}
                error={Boolean(errors.inventory?.location4)}
                fullWidth
                variant="outlined"
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <InputLabel>location 5</InputLabel>
        <Controller
          control={formHook.control}
          name={`inventory.location5`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.inventory?.location5?.message}
                error={Boolean(errors.inventory?.location5)}
                fullWidth
                variant="outlined"
              />
            );
          }}
        />
      </Grid>
    </>
  );
};

export default VariantLocationListComponent;
