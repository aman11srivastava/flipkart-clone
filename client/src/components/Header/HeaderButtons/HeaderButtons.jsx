import React, {useContext, useState} from "react";
import {Badge, Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "./HeaderButtonStyles";
import {ShoppingCart} from "@material-ui/icons";
import {Link} from 'react-router-dom'
import Login from "../../Login/Login";
import {LoginContext} from '../../../context/ContextProvider'
import Profile from "../Profile/Profile";

export const HeaderButtons = ({}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(LoginContext);
    return(
        <Box className={classes.wrapper}>
            {
                account ? <Profile setAccount={setAccount} account={account}/> :
                    <Link to={"/"}>
                        <Button onClick={() => setOpen(true)} variant={"contained"}
                                className={classes.login}>Login</Button>
                    </Link>

            }
            <Link to={"/"}><Typography style={{marginTop: 5}}>More</Typography></Link>
            <Link to={'/cart'} className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge><Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
            <Login open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}

export default HeaderButtons
