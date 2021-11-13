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
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { rActions } from '../slices/poemSlice';

const useStyles = makeStyles(styles);


const ContentManager = props => {
    const classes = useStyles();

    let { qLang } = useParams();

    console.log('url param is ' + qLang);

    const pageData = useSelector((state) => state.poems.poemPage);
    const poemLanguage = useSelector((state) => state.poems.plang);
    const rSeletedTab = useSelector((state) => state.poems.selectedTab);

    const dispatch = useDispatch();
    console.log('redux cm ' + pageData)
    console.log('redux cm ' + poemLanguage)
    console.log('redux cm ' + rSeletedTab)

    dispatch(rActions.setLanguage(qLang));

    const pageLength=8;
    const [items, setItems] = useState([{}])
    const [pageData1,setPageData]= useState([{}])
    let [pageNo, setPage] = useState(0)


    useEffect(() => {

        console.log('url param ue '+poemLanguage);

        console.log('fetchDbUrls '+fetchDbUrls("marathi").poemURL);
        let dataURLs = fetchDbUrls(qLang);

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
                dispatch(rActions.addPoemsPage(data1));
//                setPage(pageNo + 1)
                console.log(' setting data  ' + JSON.stringify(data))
            });
    }, [ qLang ]);


    const nextPage = () =>{
        console.log('page next');
        if((pageNo)*pageLength<items.length){
            pageNo = pageNo+1;
            setPage(pageNo);
            let data1 = Paginate(items, pageNo, pageLength);
//            setPageData(data1);
            dispatch(rActions.addPoemsPage(data1));
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
//            setPageData(data1);
            dispatch(rActions.addPoemsPage(data1));
            console.log(items.length)
        }

    }

    return (
        <div>
            selected tab {rSeletedTab}
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