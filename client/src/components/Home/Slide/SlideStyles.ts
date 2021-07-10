import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    image: {
        height: 150
    },
    component: {
        marginTop: 12,
         backgroundColor: '#ffffff'
    },
    deal: {
        padding: '15px 20px',
        display: 'flex'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#2874f0',
        marginLeft: 'auto',
        borderRadius: 2,
        fontSize: 13
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: '35px 13px'
    }
})
