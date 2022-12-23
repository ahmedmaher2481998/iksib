import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import {
  GridView,
  LocalMall,
  FormatListBulleted,
  People,
  Explore,
  Person,
  Settings,
  Redeem,
  Logout,
  ViewQuilt,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { FC } from "react";
const SidePanel = () => (
  <Box
    justifyContent="space-between"
    flexDirection={"column"}
    display={"flex"}
    alignItems="center"
    sx={{ height: "100vh" }}
    bgcolor={"white"}
  >
    <Box py={1} mb={1} pl={2} sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        fontWeight="800"
        sx={{ cursor: "pointer", display: { xs: "none", md: "inline-block" } }}
      >
        IKSIB
      </Typography>
    </Box>
    <List sx={{ width: "100%" }}>
      <ListItemComponent icon={<GridView />} title="Dashboard" />
      <ListItemComponent active={true} icon={<LocalMall />} title="Products" />
      <ListItemComponent icon={<FormatListBulleted />} title="Category" />
      <ListItemComponent icon={<People />} title="Customers" />
      <ListItemComponent icon={<Explore />} title="Orders" />
      <ListItemComponent icon={<Redeem />} title="Coupon" />
      <ListItemComponent icon={<Person />} title="Admins" />
      <ListItemComponent
        secondaryIcon={<KeyboardArrowRight />}
        icon={<Settings />}
        title="Setting"
      />
      <ListItemComponent
        secondaryIcon={<KeyboardArrowRight />}
        icon={<ViewQuilt />}
        title="Appearance"
      />
    </List>
    <Box
      justifyContent={"center"}
      sx={() => ({
        mt: "auto",
        width: "100%",

        mb: 8,
      })}
    >
      <Button
        sx={{
          display: {
            sm: "flex",
            xs: "none",
          },
          py: 1,
          mx: "auto",
          // 2 * 8px for each side
          width: "calc(100% - 8px * 2 * 2)",
        }}
        variant="contained"
        startIcon={<Logout />}
      >
        Logout
      </Button>
      <IconButton
        color="primary"
        sx={{ mx: "auto", display: { sx: "flex", sm: "none" } }}
      >
        <Logout />
      </IconButton>
    </Box>
  </Box>
);

type ListItemComponentProps = {
  icon: JSX.Element;
  title: string;
  active?: boolean;
  secondaryIcon?: JSX.Element | null;
};
const ListItemComponent: FC<ListItemComponentProps> = ({
  icon,
  title,
  active = false,
  secondaryIcon = null,
}: ListItemComponentProps) => (
  <ListItem
    secondaryAction={
      secondaryIcon ? (
        <IconButton edge="end" aria-label="delete">
          {secondaryIcon}
        </IconButton>
      ) : null
    }
    sx={
      active
        ? {
            borderLeft: "4px solid",
            borderLeftColor: "primary.main",
          }
        : {
            ":hover": {
              bgcolor: "secondary",
            },
          }
    }
    disablePadding
  >
    <ListItemButton>
      <ListItemIcon sx={{ color: active ? "primary.main" : "shade.main" }}>
        {icon}
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          color: active ? "primary.main" : "shade.main",
          fontWeight: "bold",
          display: { xs: "none", sm: "inline-block" },
        }}
        primary={title}
      />
    </ListItemButton>
  </ListItem>
);
export default SidePanel;
