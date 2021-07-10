import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display: 'flex',
    },
    searchIcon: {
        padding: 5,
        color: 'blue',
        height: '100%',
        diplay: 'flex'
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%'
    },
    inputInput: {
        paddingLeft: 20
    }
}))
