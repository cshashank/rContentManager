import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PoemContext from '../store/poemContext';
import { UtilConstants,fetchDbUrls, Paginate } from '../Utils/contentUtil';
import { styles } from '../Utils/ContentStyle';
import Link from '@material-ui/core/Link'
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addPoems } from '../slices/poemSlice';

const useStyles = makeStyles(styles);


const ContentManager = props => {
    const classes = useStyles();

    const pageLength=8;
    let [query, setQuery] = useState(null)
    const [items, setItems] = useState([{}])
    const [pageData,setPageData]= useState([{}])
    let [pageNo, setPage] = useState(0)
    const { pCtx, setPCtx } = useContext(PoemContext);
    console.log('tPoemContext lang is  ' + pCtx.language);

    const dispatch = useDispatch(); 

    useEffect(() => {

        console.log('fetchDbUrls '+fetchDbUrls("marathi").poemURL);
        let dataURLs = fetchDbUrls(props.plang);

        // let dataURLs = fetchDbUrls(pCtx.language);
        let selectedURL="";
        if(props.tabValue==0){
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
                dispatch(addPoems(data1));
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
            <Typography component="div" className={classes.tabContent}>
                {pageData.map((item, index) => (
                    <Card className={classes.card} key={index}>
                        <CardContent>
                            <Typography variant="normal" color="primary">
                                <a target="_blank" id={item.name} href={item.url} rel="noreferrer">
                                {item.name}
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <ButtonGroup  aria-label="outlined primary button group">
                    <Button variant="contained" color="primary" onClick={previousPage}>
                        Previous
                    </Button>
                    <Button variant="contained" color="secondary" onClick={nextPage}>
                        Next
                    </Button>
                </ButtonGroup>
            </Typography>
        </div>
    )
}
export default ContentManager;