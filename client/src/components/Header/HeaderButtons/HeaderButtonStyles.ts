import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center'
        }
    },
    container: {
        display: 'flex'
    }
})
