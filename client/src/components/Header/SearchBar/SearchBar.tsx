import React from "react";
import {useStyles} from "./SearchBarStyles";
import {Search} from '@material-ui/icons'
import {InputBase} from "@material-ui/core";

export const SearchBar = () => {
    const classes = useStyles()

    return(
        <>
            <div className={classes.search}>
                <InputBase
                    placeholder="Search for products, brands and more"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div className={classes.searchIcon}>
                    <Search />
                </div>
            </div>
        </>
    )
}

export default SearchBar
