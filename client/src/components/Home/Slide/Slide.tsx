import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {products, ProductType, timerURL} from "../../../utils/utils";
import {useStyles} from "./SlideStyles";
import {Box, Button, Divider, Typography} from "@material-ui/core";
import Countdown from "react-countdown";

interface timeFormat {
    hours: number
    minutes: number
    seconds: number

}

interface SlideProps {
    showTimer: boolean
    title: string
}

export const Slide = ({showTimer, title}: SlideProps) => {
    const classes = useStyles();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const renderer = (timeFormat: timeFormat) => {
        return <span className={classes.timer}>{timeFormat.hours} : {timeFormat.minutes} : {timeFormat.seconds} Left</span>;
    }

    return(
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    showTimer ?
                        <>
                            <img style={{width: 24}} src={timerURL} alt={"Timer"}/>
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                            <Button className={classes.button} variant={"contained"} color={"primary"}>View All</Button>
                        </>
                        :
                        <></>
                }
            </Box>
            <Divider/>
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["mobile", "tablet"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                transitionDuration={500}
                containerClass="carousel-container"
            >
                {products.map((product: ProductType) => (
                    <Box textAlign={"center"} className={classes.wrapper}>
                        <img className={classes.image} src={product.url} alt={product.title.shortTitle} key={product.id}/>
                        <Typography className={classes.text} style={{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Typography>
                        <Typography className={classes.text} style={{color: 'green'}}>{product.discount}</Typography>
                        <Typography className={classes.text} style={{color: '#212121', opacity: 0.6}}>{product.tagline}</Typography>
                    </Box>
                ))}
            </Carousel>
        </Box>
    )
}

export default Slide
