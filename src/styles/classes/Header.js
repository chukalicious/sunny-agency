import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";

export const useHeaderClass = makeStyles(() => ({
  root: {
    // fontSize: 60,
    // border: `dotted 5px ${green.A400}`,
    fontWeight: "bolder",
    color: green.A200,
  },
}));
