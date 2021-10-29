import React, { useState, useEffect, useContext } from 'react'
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


    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
        console.log('fired onChange '+value)
//        updateTabVal(value);
    };

    useEffect(()=>{
//        setValue(pCtx.tabValue)
        onChange("e",0)
    },[])

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
                        "Tab 0"
                    // <ContentManager plang={props.plang} tabValue="0" ></ContentManager>
                )}
                {value === 1 && (
                        "Tab 1"
                    // <ContentManager plang={props.plang} tabValue="1"></ContentManager>
                )}
            </div>
        </div>
    );
};
export default ContentTabs;