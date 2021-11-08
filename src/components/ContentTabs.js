import React, {useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from '../Utils/ContentStyle';
import { makeStyles } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { selectTab } from '../slices/poemSlice';
import ContentManager from './ContentManager';
import { useParams } from 'react-router-dom';
import { setPoemLanguage } from '../slices/poemSlice';

const useStyles = makeStyles(styles);

const ContentTabs = props => {

    let  {qLang} = useParams();
    let { cType } = useParams();

    console.log('url param is '+qLang);
    console.log('url param is ' + cType);

    const tPoem = useSelector((state)=>state.poems.selectedTab);
    const dispatch = useDispatch();
    console.log('redux '+JSON.stringify(tPoem));
    const classes = useStyles();
    dispatch(setPoemLanguage(qLang));

    const onChange = (e, value) => {
        dispatch(selectTab(value));
        console.log('fired onChange '+value)
    };

    useEffect(() => {
        console.log('url param ue '+qLang);
        dispatch(selectTab("0"));
        dispatch(setPoemLanguage(qLang));
    }, [])

    return (
        <div>
            {qLang}
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={tPoem} onChange={onChange}>
                        <Tab label="Poems" />
                        <Tab label="Articles" />
                    </Tabs>
                </AppBar>
                {tPoem === 0 && (
                     <ContentManager plang={qLang} tabValue="0" ></ContentManager>
                )}
                {tPoem === 1 && (
                     <ContentManager plang={props.plang} tabValue="1"></ContentManager>
                )}
            </div>
        </div>
    );
};
export default ContentTabs;