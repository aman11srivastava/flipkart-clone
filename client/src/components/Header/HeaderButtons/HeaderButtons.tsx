import React from "react";
import {Badge, Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "./HeaderButtonStyles";
import {ShoppingCart} from "@material-ui/icons";

export const HeaderButtons = () => {
    const classes = useStyles();
    return(
        <Box className={classes.wrapper}>
            <Button variant={"contained"} className={classes.login}>Login</Button>
            <Typography style={{marginTop: 5}}>More</Typography>
            <Box className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge><Typography style={{marginLeft: 10}}>Cart</Typography>
            </Box>
        </Box>
    )
}

export default HeaderButtons
