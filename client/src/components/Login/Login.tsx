import React, {useState} from "react";
import {useStyles} from "./LoginStyles";
import {Box, Button, Dialog, DialogContent, TextField, Typography} from "@material-ui/core";
import {AuthType} from "../../utils/utils";

interface LoginProps {
    open: boolean
    setOpen: (value: boolean) => void;
}

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you\'re new here!',
        subheading: 'Sign up with your mobile number to get started'
    }
}

export const Login = ({open, setOpen}: LoginProps) => {
    const classes = useStyles();
    const [account, setAccount] = useState<AuthType>(initialValue.login)

    const toggleAccount = () => {
        setAccount(initialValue.signup)
    };

    const handleClose = () => {
        setAccount(initialValue.login)
        setOpen(false)
    };

    return(
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent className={classes.component}>
                    <Box style={{display: 'flex'}}>
                        <Box className={classes.image}>
                            <Typography variant={"h5"}>{account.heading}</Typography>
                            <Typography style={{marginTop: 20, fontWeight: 'normal'}}>{account.subheading}</Typography>
                        </Box>
                        {
                            account === initialValue.login ?
                                <Box className={classes.login}>
                                    <TextField name={"username"} label={"Enter Email/Mobile number"}/>
                                    <TextField name={"password"} label={"Enter Password"} type={"password"}/>
                                    <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                    <Button className={classes.loginBtn} variant={"contained"}>Login</Button>
                                    <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                                    <Button className={classes.requestBtn} variant={"contained"}>Request OTP</Button>
                                    <Typography onClick = {toggleAccount} className={classes.createText}>New to Flipkart? Create an account</Typography>
                                </Box>
                                :
                                <Box className={classes.login}>
                                    <TextField name={"firstname"} label={"Enter Firstname"}/>
                                    <TextField name={"lastname"} label={"Enter Lastname"}/>
                                    <TextField name={"username"} label={"Enter username"}/>
                                    <TextField name={"email"} label={"Enter Email"}/>
                                    <TextField name={"phone"} label={"Enter Mobile number"}/>
                                    <TextField name={"password"} label={"Enter Password"} type={"password"}/>
                                    <Button className={classes.loginBtn} variant={"contained"}>Sign Up</Button>
                                </Box>
                        }
                    </Box>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Login
