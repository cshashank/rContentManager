import React from 'react'

export const styles = theme => ({
    card: {
        width: 200,
        height: 70,
        textAlign: 'center',
        background: 'lightblue',
        border: 'black',
        margin: 10
    },
    cardActions: {
        justifyContent: 'center'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing.unit * 2
    }
});
