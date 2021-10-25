import React, { useState, useEffect, useContext, useReducer } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PoemContext from '../store/poemContext';
import { UtilConstants } from '../Utils/contentUtil';
import ContentManager from './ContentManager';
import { styles } from '../Utils/ContentStyle';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { PoemReducer } from '../reducers/mPoemReducer';

const useStyles = makeStyles(styles);


const ContentTabs = props => {
    const classes = useStyles();

    const { pCtx, setPCtx,updateTabVal} = useContext(PoemContext);
    console.log('tPoemContext is  ' + JSON.stringify(pCtx));

    const [value, setValue] = useState(0);

    const initState={
        redPoemState: "redPoem1",
        redPoemURL: "redURL"
    }

    const [redState,dispatch] = useReducer(PoemReducer,initState);

    const onChange = (e, value) => {
        console.log('b4 redux');
        dispatch({
            type:"MARATHI_POEM",
            payload: value
        });
/*         
        setValue(value);
        pCtx.tabValue = value;
        setPCtx(pCtx);
        console.log('fired12 onChange '+value)
        updateTabVal(value);
 */    };

    useEffect(()=>{
//        setValue(pCtx.tabValue)
        onChange("e",0)
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
                    <ContentManager plang={props.plang} tabValue="0" ></ContentManager>
                )}
                {value === 1 && (
                    <ContentManager plang={props.plang} tabValue="1"></ContentManager>
                )}
            </div>
        </div>
    );
};
export default ContentTabs;