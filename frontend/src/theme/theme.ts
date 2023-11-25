import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
           light: "#579f99",
           main: "#c7d9d2",
           dark: "#a4bdb3",
           contrastText: "#fff",
        },
        secondary: {
            main: "#f10356",
            light: "#f13777",
            dark: "#b30441",
        },
        success: {
            main: "#205e23",
        },
        background: {
            default: "#3B1B54",
        },
    },
});