import { createTheme } from "@mui/material";

export const darktheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#ff7c00"
        },
        secondary:{
            main:"#5a20cb"
        },
        black:{
            main:"#242b2e"
        },
        background:{
            main:"#0d0d66",
            default:"#0d0d0d",
            paper:"#0d0d0d"
        },
        textColor:{
            main:"#111111"
        }
    }
});