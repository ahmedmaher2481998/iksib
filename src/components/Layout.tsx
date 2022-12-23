import { Box, Grid } from "@mui/material";
import { FC, ReactNode } from "react";
import SidePanel from "./SidePanel";
type props = { children: ReactNode };
const Layout: FC<props> = ({ children }: props) => {
  return (
    <Grid
      sx={{ minHeight: "100vh", pb: 3 }}
      bgcolor={"secondary.main"}
      container
    >
      <Grid item xs={1} sm={3} md={2}>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <SidePanel />
        </Box>
      </Grid>
      <Grid item xs={11} sm={9} md={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
