import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from '../Utils/ContentStyle';
import { makeStyles } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { selectTab } from '../slices/poemSlice';
import ContentManager from './ContentManager';

const useStyles = makeStyles(styles);


const ContentTabs = props => {

    const tPoem = useSelector((state)=>state.poems.selectedTab);
    const dispatch = useDispatch();
    console.log('redux '+JSON.stringify(tPoem));
    const classes = useStyles();

    const onChange = (e, value) => {
        dispatch(selectTab(value));
        console.log('fired onChange '+value)
    };

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={tPoem} onChange={onChange}>
                        <Tab label="Poems" />
                        <Tab label="Articles" />
                    </Tabs>
                </AppBar>
                {tPoem === 0 && (
                     <ContentManager plang={props.plang} tabValue="0" ></ContentManager>
                )}
                {tPoem === 1 && (
                     <ContentManager plang={props.plang} tabValue="1"></ContentManager>
                )}
            </div>
        </div>
    );
};
export default ContentTabs;