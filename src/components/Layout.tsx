import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";
import SidePanel from "./SidePanel";
type props = { children: ReactNode };
const Layout: FC<props> = ({ children }: props) => {
  return (
    <Grid sx={{ minHeight: "100vh" }} bgcolor={"secondary.main"} container>
      <Grid item xs={1.8}>
        <SidePanel />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
