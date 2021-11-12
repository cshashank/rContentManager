import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from '../Utils/ContentStyle';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectTab } from '../slices/poemSlice';
import ContentManager from './ContentManager';
import { useParams } from 'react-router-dom';
import { setPoemLanguage } from '../slices/poemSlice';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button, ButtonGroup } from '@material-ui/core';
import { AppBarButtons } from './AppBarButtons';

const useStyles = makeStyles(styles);

const ContentTabs = props => {


    let { qLang } = useParams();
    let { cType } = useParams();
    const [value, setValue] = useState(0);

    console.log('url param is ' + qLang);
    console.log('url param is ' + cType);

    const tPoem = useSelector((state) => state.poems.selectedTab);
    const dispatch = useDispatch();
    console.log('redux ' + JSON.stringify(tPoem));
    const classes = useStyles();
    dispatch(setPoemLanguage(qLang));

    const onChange = (e, value) => {
        dispatch(selectTab(value));
        console.log('fired onChange ' + value)
    };

    useEffect(() => {
        console.log('url param ue ' + qLang);
        dispatch(selectTab("0"));
        dispatch(setPoemLanguage(qLang));
        onChange({}, "test0");
    }, [qLang])

    return (
        <div>
            {qLang}
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography className={classes.enabledMenu}>
                        <AppBarButtons />
                    </Typography>
                </Toolbar>
            </AppBar>
            <ContentManager/>
        </div>
    );
};
export default ContentTabs;