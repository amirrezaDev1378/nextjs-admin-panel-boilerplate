import {createTheme} from "@mui/material";
import {responsiveFontSizes} from "@mui/material";

const defaultTheme = createTheme({
    typography: {
        body1: {
            fontSize: "1rem",
        },

    },
    palette: {
        success: {
            main: "#00E38C",
        },
    },
});

export default responsiveFontSizes(defaultTheme);
