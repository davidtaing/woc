import { createTheme } from "@mui/material/styles";

/* 
    Global MUI theme
*/

const Theme = createTheme({
    palette: {
        primary: { main: "#1d1d1d" },
        secondary: { main: "#763E1C" },
    },
    spacing: 9,
    typography: {
        fontSize: 12,
        fontFamily: `Montserrat, 'sans-serif'`
    },
});

export default Theme;
