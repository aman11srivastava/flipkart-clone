import React from "react";
import {Box, Typography} from "@material-ui/core";
import {navData, NavDataType} from "../../../utils/utils";
import {useStyles} from "./NavbarStyles";

export const Navbar = () => {
    const classes = useStyles();
    return(
        <Box className={classes.component}>
            {navData.map((value: NavDataType, index: number) => (
                <Box className={classes.container} key={index}>
                    <img src={value.url} alt={value.text} className={classes.image}/>
                    <Typography className={classes.text}>{value.text}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Navbar
