import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from '../Utils/ContentStyle';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { rActions } from '../slices/poemSlice';
import ContentManager from './ContentManager';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, ButtonGroup } from '@material-ui/core';
import { AppBarButtons } from './AppBarButtons';
import {Drawer} from './Drawer'

const useStyles = makeStyles(styles);

const ContentTabs = props => {


    let { qLang } = useParams();
    let { qFeature } = useParams();
    const [value, setValue] = useState(0);

    console.log('url param is ' + qLang);
    console.log('url param is ' + qFeature);

    const tPoem = useSelector((state) => state.poems.selectedTab);
    const dispatch = useDispatch();
    console.log('redux ' + JSON.stringify(tPoem));
    const classes = useStyles();
    //dispatch(rActions.setLanguage(qLang));

    const onChange = (e, value) => {
        dispatch(rActions.selectTab(value));
        console.log('fired onChange ' + value)
    };

    useEffect(() => {
        dispatch(rActions.setLanguage(qLang));
        dispatch(rActions.setFeature(qFeature));
        onChange({}, "test0");
    }, [qLang,qFeature])

    const menuClick=()=>{
        dispatch(rActions.toggleDrawer(true));
    }

    return (
        <div>
            {qLang}
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon onClick={menuClick}/>
                    </IconButton>
                    <Typography className={classes.enabledMenu}>
                        <AppBarButtons />
                    </Typography>
                </Toolbar>
                <div>
                    <Drawer />
                </div>
            </AppBar>
            <ContentManager />
        </div>
    );
};
export default ContentTabs;