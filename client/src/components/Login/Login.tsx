import React, {ChangeEvent, useState} from "react";
import {useStyles} from "./LoginStyles";
import {Box, Button, Dialog, DialogContent, TextField, Typography} from "@material-ui/core";
import {
    AuthType,
    initialValue,
    LoginInfoType,
    loginInitialValues,
    SignUpInfoType,
    signUpInitialValues
} from "../../utils/utils";
import {authenticateLogin, authenticateSignUp} from "../../service/api";

interface LoginProps {
    open: boolean
    setOpen: (value: boolean) => void;
    setAccount: (val: string) => void
}


export const Login = ({open, setOpen, setAccount}: LoginProps) => {
    const classes = useStyles();
    const [account, toggleAccount] = useState<AuthType>(initialValue.login)
    const [signUp, setSignUp] = useState<SignUpInfoType>(signUpInitialValues)
    const [login, setLogin] = useState<LoginInfoType>(loginInitialValues)
    const [error, setError] = useState<boolean>(false);

    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup)
    };

    const handleClose = () => {
        toggleAccount(initialValue.login)
        setOpen(false)
    };

    const signUpUser = async () => {
        let response = await authenticateSignUp(signUp)
        if (!response) return;
        handleClose();
        setAccount(signUp.username)
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
    };

    const handleLoginValuesChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response) {
            setError(true)
            return;
        }
        handleClose();
        setAccount(login.username)
    }

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
                                    <TextField name={"username"} label={"Enter Email/Mobile number"}
                                               onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleLoginValuesChange(e)}
                                    />
                                    <TextField name={"password"} label={"Enter Password"} type={"password"}
                                               onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleLoginValuesChange(e)}
                                    />
                                    {
                                        error && <Typography className={classes.error}>Login Authentication Failed!</Typography>
                                    }
                                    <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                    <Button
                                        className={classes.loginBtn}
                                        variant={"contained"}
                                        onClick = {loginUser}
                                    >
                                        Login
                                    </Button>
                                    <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                                    <Button className={classes.requestBtn} variant={"contained"}>Request OTP</Button>
                                    <Typography onClick = {toggleUserAccount} className={classes.createText}>New to Flipkart? Create an account</Typography>
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
