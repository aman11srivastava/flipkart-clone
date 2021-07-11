import React, {ChangeEvent, useState} from "react";
import {useStyles} from "./LoginStyles";
import {Box, Button, Dialog, DialogContent, TextField, Typography} from "@material-ui/core";
import {AuthType} from "../../utils/utils";
import {authenticateSignUp} from "../../service/api";

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

export type SignUpInfoType = {
    firstName: string
    lastName: string
    username: string
    password: string
    email: string
    phone: string
}

const signUpInitialValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    phone: '',
    email: ''
}

export const Login = ({open, setOpen}: LoginProps) => {
    const classes = useStyles();
    const [account, setAccount] = useState<AuthType>(initialValue.login)
    const [signUp, setSignUp] = useState<SignUpInfoType>(signUpInitialValues)

    const toggleAccount = () => {
        setAccount(initialValue.signup)
    };

    const handleClose = () => {
        setAccount(initialValue.login)
        setOpen(false)
    };

    const signUpUser = async () => {
        let response = await authenticateSignUp(signUp)
        if (!response) return;
        handleClose()
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
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
                                    <TextField name={"firstName"} label={"Enter Firstname"}
                                               onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(e)}
                                    />
                                    <TextField name={"lastName"} label={"Enter Lastname"}
                                               onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(e)}
                                    />
                                    <TextField name={"username"} label={"Enter username"}
                                               onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(e)}
                                    />
                                    <TextField name={"email"} label={"Enter Email"}
                                        onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(e)}
                                    />
                                    <TextField name={"phone"} label={"Enter Mobile number"}
                                               onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(e)}
                                    />
                                    <TextField name={"password"} label={"Enter Password"} type={"password"}
                                               onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(e)}
                                    />
                                    <Button
                                        onClick = {signUpUser}
                                        className={classes.loginBtn}
                                        variant={"contained"}
                                    >
                                        Sign Up
                                    </Button>
                                </Box>
                        }
                    </Box>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Login
