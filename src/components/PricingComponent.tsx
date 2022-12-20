import { colors, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { FormCard, FormCardItem } from "./FormCard";

const PricingComponent = () => {
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
              <TextField fullWidth placeholder="KWD 0.00" variant="outlined" />
            </Box>
            <Box sx={{ width: "100%" }}>
              <InputLabel sx={{ fontSize: 16, pb: 0.5 }}>Sale price</InputLabel>
              <TextField fullWidth placeholder="KWD 0.00" variant="outlined" />
            </Box>
          </Stack>
          <Box sx={{ width: "100%" }}>
            <InputLabel sx={{ fontSize: 16, pb: 0.5 }}>
              Cost per Item
            </InputLabel>
            <TextField
              fullWidth
              placeholder="KWD 0.00"
              helperText="Customer's won't see this"
              variant="outlined"
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
              <TextField fullWidth placeholder="" variant="outlined" />
            </Box>
          </Stack>
        </FormCardItem>
        <Box p={1} width={"100%"}>
          <Typography fontSize={18} pb={1}>
            Locations
          </Typography>
        </Box>
        <Grid p={2} container justifyContent={"space-between"} gap={1}>
          <LocationComponent title="Location 1" />
          <LocationComponent title="Location 2" />
          <LocationComponent title="Location 3" />
          <LocationComponent title="Location 4" />
          <LocationComponent title="Location 5" />
        </Grid>
      </FormCard>
    </>
  );
};
const LocationComponent = ({ title }: { title: string }) => {
  return (
    <Grid item xs={5}>
      <InputLabel>{title}</InputLabel>
      <TextField fullWidth variant="outlined" />
    </Grid>
  );
};
export default PricingComponent;
