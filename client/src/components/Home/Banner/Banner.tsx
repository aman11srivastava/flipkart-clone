import React from "react";
import Carousel from "react-material-ui-carousel";
import {bannerData} from "../../../utils/utils";
import {useStyles} from "./BannerStyles";

export const Banner = () => {
    const classes = useStyles();
    return(
        <Carousel
            indicators={false}
            autoPlay={true}
            animation={"slide"}
            navButtonsAlwaysVisible={true}
            cycleNavigation={false}
            navButtonsProps={{
                style: {
                    backgroundColor: '#ffffff',
                    color: '#494949',
                    borderRadius: 0,
                    margin: 0
                }
            }}
            className={classes.carousel}
        >
            {
                bannerData.map((value: string, index: number) => (
                    <img className={classes.image} src={value} key={index} alt={""}/>
                ))
            }
        </Carousel>
    )
}

export default Banner
