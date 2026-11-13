import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Defined once at module level so the buttons are not re-created on every render.
// The `as typeof Button` cast keeps the `component="a"` / `href` props typed.

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#6747d9"),
  backgroundColor: "#6747d9",
  "&:hover": {
    backgroundColor: "#5636c4",
  },
})) as typeof Button;

export const OutlineButton = styled(Button)({
  color: "#6747d9",
  borderColor: "#6747d9",
  "&:hover": {
    backgroundColor: "rgba(103, 71, 217, 0.1)",
  },
}) as typeof Button;
