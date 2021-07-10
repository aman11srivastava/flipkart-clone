import React from "react";
import {AppBar, Box, Toolbar, Typography, withStyles} from "@material-ui/core";
import {logoURL, subURL} from "../../utils/utils";
import {useStyles} from "./HeaderStyles";
import SearchBar from "./SearchBar/SearchBar";
import HeaderButtons from "./HeaderButtons/HeaderButtons";

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
                    <Box className={classes.component}>
                        <img  alt={"flipkart-logo"} src={logoURL} className={classes.logo}/>
                        <Box className={classes.container}>
                            <Typography className={classes.subHeading}>Explore <Box style={{color: '#FFE500'}} component={"span"}>Plus</Box></Typography>
                            <img src={subURL} alt={"plus-icon"} className={classes.subURL}/>
                        </Box>
                    </Box>
                    <SearchBar/>
                    <HeaderButtons/>
                </ToolBar>
            </AppBar>
        </>
    )
}

export default Header
