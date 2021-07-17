import React, {useState} from "react";
import {Menu, MenuItem, Typography} from "@material-ui/core";
import './ProfileStyles'
import {useStyles} from "./ProfileStyles";
import {PowerSettingsNew} from "@material-ui/icons";

interface ProfileProps {
    account: any
    setAccount: (val: any) => void
}

export const Profile = ({account, setAccount}: ProfileProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState<null | HTMLElement>(null);

    const handleClose = () => {
        setOpen(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(event.currentTarget);
    };

    const logout = () => {
        setAccount('');
    }

    return (
        <>
            <Typography onClick = {handleClick} style={{marginTop: 4, cursor: 'pointer'}}>{account}</Typography>
            <Menu
                className={classes.component}
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    logout();
                }}>
                    <PowerSettingsNew
                        fontSize={"small"}
                        color={"primary"}
                    />
                    <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile
