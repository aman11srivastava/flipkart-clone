import React from "react";
import {Box} from "@material-ui/core";
import {coronaURL, ImageURL} from "../../../utils/utils";
import {useStyles} from "./MidSectionStyles";

export const MidSection = () => {
    const classes = useStyles();
    return(
       <>
           <Box className={classes.wrapper}>
               {ImageURL.map((image: string, index: number) => (
                   <img src={image} alt={"Image"} width={"33%"}/>
               ))}
           </Box>
           <img src={coronaURL} alt={"Covid-19"} style={{marginTop: 20}} width={"100%"}/>
       </>
    )
}

export default MidSection
