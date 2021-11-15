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
    },
    menuLink: {
        color: "white",
        width: "100px",
        height: "30px",
        textAlign: "center",
        textDecoration:"underline white",
        margin: 10
    },
    enabledMenu: {
        variant:"h6" ,
        color:"white",
        component:"div"
    },
    disabledButton: {
        borderRadius: 20,
        backgroundColor: "#1277ae",
        padding: "4px 20px",
        fontSize: "18px",
        cursor: "not-allowed",
        margin: 10
    },
    enabledButton: {
        borderRadius: 20,
        backgroundColor: "#21c6ae",
        padding: "4px 20px",
        fontSize: "18px",
        margin: 10
    },
    hideListItem:{
        color:"red",
        invisible: {
            visibility: "hidden"
        },
    }
});
