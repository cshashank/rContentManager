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
import { styles } from '../Utils/ContentStyle';

const ContentManager = withStyles(styles)(({ classes,sname }) => {

    localStorage.setItem('poemURL', 'marathi1');
    let [query, setQuery] = useState(null)
    const [items, setItems] = useState([{}])
    const { pCtx, setPCtx } = useContext(PoemContext);
    console.log('tPoemContext is  ' + pCtx);

    useEffect(() => {
        console.log('in use effect marathi poems ' + query);
        const tempUrl = localStorage.getItem('poemURL');

        fetch(pCtx
            , {
                "headers": {
                    "ContentType": "application/json",
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                setItems(data)
                console.log(' setting data  ' + data)
            });
    }, [query]);

    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
        let tQuery = (value === 0) ? "poemQuery" : "articleQuery";
        setQuery(tQuery);
    };

    return (
        <div>
            <Typography component="div" className={classes.tabContent}>
                {items.map((item, index) => (
                    <Card className={classes.card} key={index}>
                        <CardContent>
                            <Typography variant="normal" color="primary">
                                <a target="_blank" href={item.url} rel="noreferrer">
                                {item.name}
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Button onClick={() => setPCtx('state ctxt')}>
                    click me
                </Button>
                <div>123 {pCtx} 
                    aabb 
                    {UtilConstants().MARATHI_POEM_DB_URL} 
                </div>
            </Typography>
        </div>
    )
})
export default ContentManager;