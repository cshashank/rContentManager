import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PoemContext from '../store/poemContext';
import { UtilConstants,fetchDbUrls, Paginate } from '../Utils/contentUtil';
import { styles } from '../Utils/ContentStyle';
import Link from '@material-ui/core/Link'

const ContentManager = withStyles(styles)(({ classes }) => {

    const pageLength=8;
    let [query, setQuery] = useState(null)
    const [items, setItems] = useState([{}])
    const [pageData,setPageData]= useState([{}])
    let [pageNo, setPage] = useState(0)
    const { pCtx, setPCtx } = useContext(PoemContext);
    console.log('tPoemContext lang is  ' + pCtx.language);

    useEffect(() => {
        console.log('in use effect marathi poems ' + query);
        console.log('context is  ' + pCtx);

        console.log('fetchDbUrls '+fetchDbUrls("marathi").poemURL);
        let dataURLs = fetchDbUrls(pCtx.language);
        console.log('poemURL '+dataURLs.poemURL);
        let selectedURL="";
        if(pCtx.tabValue===0){
            selectedURL = dataURLs.poemURL;
        }else{
            selectedURL = dataURLs.articleURL
        }
        fetch(selectedURL
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
                setItems(data);
                let data1 = Paginate(data, 0, pageLength);
                setPageData(data1);
//                setPage(pageNo + 1)
                console.log(' setting data  ' + JSON.stringify(data))
            });
    }, [query,pCtx]);


    const nextPage = () =>{
        console.log('page next');
        if((pageNo)*pageLength<items.length){
            pageNo = pageNo+1;
            setPage(pageNo);
            let data1 = Paginate(items, pageNo, pageLength);
            setPageData(data1);
            console.log(items.length)
        }

    }
    const previousPage = () => {
        console.log('page previous');
        if (pageNo>0) {
            pageNo = pageNo-1;
            setPage(pageNo);
            console.log('page previous number '+pageNo);
            let data1 = Paginate(items, pageNo, pageLength);
            setPageData(data1);
            console.log(items.length)
        }

    }

    return (
        <div>
            <div>page number {pageNo}<br></br>page length {items.length}</div>
            <Typography component="div" className={classes.tabContent}>
                {pageData.map((item, index) => (
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
                <div className={classes.nextLink}>
                    <Link href="#" onClick={nextPage}>
                        Next
                    </Link>
                </div>
                <div className={classes.previousLink}>
                    <Link href="#" onClick={previousPage}>
                        Previous
                    </Link>
                </div>
            </Typography>
        </div>
    )
})
export default ContentManager;