import React, {useState} from "react";
import {Badge, Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "./HeaderButtonStyles";
import {ShoppingCart} from "@material-ui/icons";
import {Link} from 'react-router-dom'
import Login from "../../Login/Login";

export const HeaderButtons = () => {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false)
    return(
        <Box className={classes.wrapper}>
            <Link to={"/"}><Button onClick={() => setOpen(true)} variant={"contained"} className={classes.login}>Login</Button></Link>
            <Link to={"/"}><Typography style={{marginTop: 5}}>More</Typography></Link>
            <Link to={'/cart'} className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge><Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
            <Login open={open} setOpen={setOpen}/>
        </Box>
    )
}

export default HeaderButtons
