import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        width: 200,
        height: 70,
        textAlign: 'center',
        background: 'lightblue',
        border: 'black',
        margin: 10
    },
    cardActions: {
        justifyContent: 'center'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing.unit * 2
    }
});

const MarathiPoems = withStyles(styles)(({ classes }) => {
    localStorage.setItem('poemURL', 'marathi1');
    const [items, setItems] = useState([{}])
    useEffect(() => {
        const tempUrl = localStorage.getItem('poemURL');
        fetch('data/marathiDb.json'
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
    }, []);

    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
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
                    <Typography component="div" className={classes.tabContent}>
                        {items.map((item, index) => (
                            <Card className={classes.card} key={index}>
                                <CardContent>
                                    <Typography variant="h5" color="primary">{item.name}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Typography>
                )}
                {value === 1 && (
                    <Typography component="div" className={classes.tabContent}>
                        Item Two
                    </Typography>
                )}
            </div>
        </div>
    );
})
export default MarathiPoems;