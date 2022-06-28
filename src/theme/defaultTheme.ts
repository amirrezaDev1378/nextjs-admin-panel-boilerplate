import {createTheme} from "@mui/material";
import {responsiveFontSizes} from "@mui/material";

const defaultTheme = createTheme({
    typography: {
        fontFamily: '"Poppins normal", sans-serif',
        body1: {
            fontSize: "0.8rem",
        },
        h5: {
            fontFamily:"Poppins light",
        },
        h3: {
            // fontWeight: "150",
            fontFamily:"Poppins light",

        },


    },
    palette: {
        success: {
            main: "#00E38C",
        },
        secondary: {
            main: "#8990AD"
        },
        primary: {
            main: "#2464FC"
        }
    },
});

export default responsiveFontSizes(defaultTheme);
