import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  colors,
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
  Calculate,
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
      <Typography variant="h4" fontWeight="800" sx={{ cursor: "pointer" }}>
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
    <Button
      variant="contained"
      startIcon={<Logout />}
      sx={(theme) => ({
        mt: "auto",
        mb: 8,
        // 2 * 8px for each side
        width: "calc(100% - 8px * 2 * 2)",
        py: 1,
      })}
    >
      Logout
    </Button>
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
        }}
        primary={title}
      />
    </ListItemButton>
  </ListItem>
);
export default SidePanel;
