import React from "react";
import {AppBar, Box, Toolbar, Typography, withStyles} from "@material-ui/core";
import {logoURL, subURL} from "../../utils/utils";
import {useStyles} from "./HeaderStyles";
import SearchBar from "./SearchBar/SearchBar";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import {Link} from 'react-router-dom'

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar)

export const Header = () => {
    const classes = useStyles();
    return(
        <>
            <AppBar className={classes.header}>
                <ToolBar>
                    <Link to={'/'} className={classes.component}>
                        <img  alt={"flipkart-logo"} src={logoURL} className={classes.logo}/>
                        <Box className={classes.container}>
                            <Typography className={classes.subHeading}>Explore <Box style={{color: '#FFE500'}} component={"span"}>Plus</Box></Typography>
                            <img src={subURL} alt={"plus-icon"} className={classes.subURL}/>
                        </Box>
                    </Link>
                    <SearchBar/>
                    <HeaderButtons/>
                </ToolBar>
            </AppBar>
        </>
    )
}

export default Header
