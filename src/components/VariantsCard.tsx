import { Add, Close } from "@mui/icons-material";
import {
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
import React, { useState } from "react";
import { FormCard, FormCardItem } from "./FormCard";
type attribute = {
  option: string;
  value: string[];
};
const VariantsCard = () => {
  const [options, setOptions] = useState();
  const [value, setValue] = useState();
  const attributes: attribute[] = [];
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
        <Stack direction={"row"} spacing={1} alignItems="center">
          <Box>
            <InputLabel sx={{ fontSize: 18 }} htmlFor="options">
              <Stack alignItems={"center"} direction={"row"}>
                Option name &nbsp;
                <Typography fontSize={14}>(size,color,etc)</Typography>
              </Stack>
            </InputLabel>
            <TextField
              value={options}
              onChange={(e) => {
                // if(e.target.value!=='' && !Boolean(attributes.find(attr=>attr.option===value))){
                //     setOptions(e.target.value)
                // }
                if (e.target.value !== "") setOptions(e.target.value);
              }}
              placeholder="Option name"
            />
          </Box>
          <Box>
            <InputLabel htmlFor="options">Values</InputLabel>
            <TextField
              value={value}
              onChange={(e) => {
                // if(e.target.value!=='' && !Boolean(attributes.find(attr=>attr.option===value))){
                //     setOptions(e.target.value)
                // }
                if (e.target.value !== "" && Boolean(options))
                  setValue(e.target.value);
              }}
              placeholder="Value"
            />
          </Box>
          <Box height={"100%"}>
            <IconButton
              onClick={() => {
                console.log(options, value);
              }}
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
          <Chip label="Red" onDelete={() => {}} />
          <Chip label="Blue" onDelete={() => {}} />
          <Chip label="Green" onDelete={() => {}} />
          <Chip label="Black" onDelete={() => {}} />
          <Chip label="White" onDelete={() => {}} />
          <Chip label="Brown" onDelete={() => {}} />
          <Chip label="Pink" onDelete={() => {}} />
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
