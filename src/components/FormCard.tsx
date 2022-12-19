import { Grid } from "@mui/material";
import React, { FC, ReactNode } from "react";
type props = {
  children: ReactNode;
  size?: {
    xs?: number;
    sm?: number;
    md?: number;
  };
};
type wrapperProps = {
  children: ReactNode;
};

const FromCard: FC<wrapperProps> = ({ children }) => {
  return (
    <>
      <Grid container bgcolor={"white"} p={1} borderRadius={2}>
        {children}
      </Grid>
    </>
  );
};
const FormCardItem: FC<props> = ({ children, size }) => {
  return (
    <Grid px={1} item xs={size?.xs} md={size?.md} sm={size?.sm}>
      {children}
    </Grid>
  );
};

export { FormCardItem, FromCard };
