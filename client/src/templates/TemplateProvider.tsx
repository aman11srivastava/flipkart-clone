import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {createContext} from "react";

interface ThemeProviderProps {
    children: any
}

const TemplateContext = createContext(null)

export const TemplateProvider = ({children}: ThemeProviderProps) => {
    const theme = createMuiTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
                }
            },
            MuiDialogContent: {
                root: {
                    padding: 0,
                    '&:first-child': {
                        paddingTop: 0
                    }
                }
            }
        }
    })
    return (
        <TemplateContext.Provider value={null}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </MuiThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider
