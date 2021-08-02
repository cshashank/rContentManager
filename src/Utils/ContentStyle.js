import React from 'react'

export const styles = theme => ({
    card: {
        width: 100,
        height: 60,
        textAlign: 'top',
        background: 'lightblue',
        border: 'black',
        margin: 3
    },
    cardActions: {
        justifyContent: 'center'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing(1)
    },
    cardcontent: {
        padding: 0,
        height:20,
        textAlign: "center",
        "&:last-child": {
            paddingBottom: 0
        }
    }
});
