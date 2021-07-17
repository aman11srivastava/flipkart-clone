import React, {createContext, useState} from "react";

export const LoginContext = createContext(null);

export const ContextProvider = ({children}) => {
    const [account, setAccount] = useState('');

    // @ts-ignore
    return(
        <LoginContext.Provider
            value={{account, setAccount}}
        >
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider
