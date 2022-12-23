import { Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { formHookType, productFormValues } from "../../shared/types";

const LocationListComponent = ({
  formHook,
}: {
  formHook: formHookType<productFormValues>;
}) => {
  return (
    <>
      <Grid item xs={5}>
        <InputLabel>location 1</InputLabel>
        <Controller
          control={formHook.control}
          name={`pricing.location.location1`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.pricing?.location?.location1?.message}
                error={Boolean(errors.pricing?.location?.location1)}
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
          name={`pricing.location.location2`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.pricing?.location?.location2?.message}
                error={Boolean(errors.pricing?.location?.location2)}
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
          name={`pricing.location.location3`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.pricing?.location?.location3?.message}
                error={Boolean(errors.pricing?.location?.location3)}
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
          name={`pricing.location.location4`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.pricing?.location?.location4?.message}
                error={Boolean(errors.pricing?.location?.location4)}
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
          name={`pricing.location.location5`}
          render={({ formState: { errors }, field: { onChange } }) => {
            return (
              <TextField
                onChange={onChange}
                helperText={errors.pricing?.location?.location5?.message}
                error={Boolean(errors.pricing?.location?.location5)}
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

export default LocationListComponent;
