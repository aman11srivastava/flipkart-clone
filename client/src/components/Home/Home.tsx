import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import {Box} from "@material-ui/core";
import {useStyles} from "./HomeStyles";
import Slide from "./Slide/Slide";
import {adURL} from "../../utils/utils";
import MidSection from "./MidSection/MidSection";

export const Home = () => {
    const classes = useStyles();
    return(
        <>
            <Navbar/>
            <Box className={classes.component}>
                <Banner/>
                <Box style={{display: 'flex'}}>
                    <Box style={{width: '83%'}}>
                        <Slide title={"Deal of the Day!"} showTimer={true}/>
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} alt={"Adv"} width={230}/>
                    </Box>
                </Box>
                <MidSection/>
                <Slide title={"Discounts for you"} showTimer={false}/>
                <Slide title={"Suggested Items"} showTimer={false}/>
                <Slide title={"Top Selection"} showTimer={false}/>
                <Slide title={"Recommended Items"} showTimer={false}/>
                <Slide title={"Best Sellers"} showTimer={false}/>
            </Box>
        </>
    )
}

export default Home
