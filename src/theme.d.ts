import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    shade: PaletteColor;
  }
  interface PaletteOptions {
    shade: PaletteColorOptions;
  }
}
