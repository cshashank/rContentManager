import React from 'react'

export const styles = theme => ({
    card: {
        width: 400,
        height: 60,
        textAlign: 'top',
        background: 'lightblue',
        border: 'black',
        margin: 3    },
    cardActions: {
        justifyContent: 'center'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing(1),
        width: "100%",
        height: "100%",
        backgroundImage: `url("/bgimg.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "noRepeat",
        backgroundPosition: "center center",
        backgroundSize:"1600px 600px"
    },
    cardcontent: {
        padding: 0,
        height:20,
        textAlign: "center",
        "&:last-child": {
            paddingBottom: 0
        }
    },
    nextLink:{
        backgroundColor:"red",
        width:"100px",
        height:"30px",
        textAlign:"center"
    },
    previousLink: {
        backgroundColor: "lightGreen",
        width: "100px",
        height: "30px",
        textAlign: "center"
    }
});
