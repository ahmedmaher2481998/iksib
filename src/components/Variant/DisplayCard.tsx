import { Clear } from "@mui/icons-material";
import {
  Box,
  Button,
  colors,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeVariationDetailsByVariationString } from "../../store/productSlice";
import { FormCard, FormCardItem } from "../Product/FormCard";

const DisplayCard = () => {
  const dispatch = useAppDispatch();
  const productVariations = useAppSelector(
    (s) => s.productReducer.product.productVariations
  );
  const navigate = useNavigate();
  if (!productVariations?.length) return null;
  return (
    <FormCard>
      <FormCardItem size={{ xs: 12 }}>
        {Boolean(productVariations?.length) && (
          <Typography fontSize={18} fontWeight="bold">
            Saved Variants:
          </Typography>
        )}
        {productVariations?.map((item) => {
          return (
            <ListItem
              key={item.variation_string}
              sx={{
                mt: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                borderRadius: 2,
                bgcolor: colors.grey[100],
              }}
            >
              <ListItemText>{item.variation_string}</ListItemText>
              <ListItemIcon
                sx={{ cursor: "pointer", color: colors.red[500] }}
                onClick={() => {
                  dispatch(removeVariationDetailsByVariationString(item));
                }}
              >
                <Clear />
              </ListItemIcon>
            </ListItem>
          );
        })}
        {Boolean(productVariations?.length) && (
          <Box width={"100%"} display="flex" px={3} justifyContent="flex-end">
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate("/added");
              }}
              type="button"
              sx={{ bgcolor: "primary.main", mb: 2, mt: 2 }}
            >
              Finish
            </Button>
          </Box>
        )}
      </FormCardItem>
    </FormCard>
  );
};

export default DisplayCard;
