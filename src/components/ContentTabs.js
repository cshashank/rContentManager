import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PoemContext from '../store/poemContext';
import { UtilConstants } from '../Utils/contentUtil';
import ContentManager from './ContentManager';
import { styles } from '../Utils/ContentStyle';


const MarathiTabs = withStyles(styles)(({ classes }) => {
 
    let [query, setQuery] = useState(null)
    const [items, setItems] = useState([{}])
    const { pCtx, setPCtx} = useContext(PoemContext);
    console.log('tPoemContext is  ' + pCtx);

    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
        let tQuery = (value === 0) ? 
              UtilConstants().MARATHI_POEM_DB_URL
            : UtilConstants().MARATHI_ARTICLE_DB_URL;
        setQuery(tQuery);
        setPCtx(tQuery);
        console.log('pctx is '+pCtx);
    };

    return (
        <div>
            Marathi poems links {items[0].name}
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
})
export default MarathiTabs;