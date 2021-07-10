import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import {Box} from "@material-ui/core";
import {useStyles} from "./HomeStyles";

export const Home = () => {
    const classes = useStyles();
    return(
        <>
            <Navbar/>
            <Box className={classes.component}>
                <Banner/>
            </Box>
        </>
    )
}

export default Home
