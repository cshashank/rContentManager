import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PoemContext from '../store/poemContext';
import { UtilConstants, Paginate } from '../Utils/contentUtil';
import { styles } from '../Utils/ContentStyle';
import Link from '@material-ui/core/Link'

const ContentManager = withStyles(styles)(({ classes,sname }) => {

    localStorage.setItem('poemURL', 'marathi1');
    let [query, setQuery] = useState(null)
    const [items, setItems] = useState([{}])
    let [pageNo, setPage] = useState(0)
    const { pCtx, setPCtx } = useContext(PoemContext);
    console.log('tPoemContext is  ' + pCtx);

    useEffect(() => {
        console.log('in use effect marathi poems ' + query);
        console.log('context is  ' + pCtx);

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
               let data1=Paginate(data,pageNo,4);
                setItems(data1);
                console.log(' setting data  ' + JSON.stringify(data1))
            });
    }, [query,pageNo]);

    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
        let tQuery = (value === 0) ? "poemQuery" : "articleQuery";
        setQuery(tQuery);
    };

    const nextPage = () =>{
        setPage(pageNo+1)

    }
    
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
                <Link href="#" onClick={nextPage}>
                    Next
                </Link>
            </Typography>
        </div>
    )
})
export default ContentManager;