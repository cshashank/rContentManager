import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PoemContext from '../store/poemContext';
import { UtilConstants } from '../Utils/contentUtil';
import ContentManager from './ContentManager';
import { styles } from '../Utils/ContentStyle';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);


const ContentTabs = props => {
    const classes = useStyles();

    const { pCtx, setPCtx,updateTabVal} = useContext(PoemContext);
    console.log('tPoemContext is  ' + JSON.stringify(pCtx));

    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
        pCtx.tabValue = value;
        setPCtx(pCtx);
        updateTabVal(value);
    };

    useEffect(()=>{
        setValue(pCtx.tabValue)
    },[pCtx])

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={onChange}>
                        <Tab label="Poems" />
                        <Tab label="Articles" />
                    </Tabs>
                </AppBar>
                {value === 0 && (
                    <ContentManager ></ContentManager>
                )}
                {value === 1 && (
                    <ContentManager></ContentManager>
                )}
            </div>
        </div>
    );
};
export default ContentTabs;