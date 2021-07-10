import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    component: {
        display: 'flex',
        margin: '50px 130px 0 130px',
        justifyContent: 'space-between'
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
})
