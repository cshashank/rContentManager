import React,{useContext,useState} from 'react';
import PoemContext  from '../store/poemContext';
import ContentTabs from './ContentTabs';
import { UtilConstants } from '../Utils/contentUtil';

export const ContentTabs1 = (props) => {
 
 //    const { pCtx, setPCtx } = useContext(PoemContext);
    
//    setPCtx({ "query": UtilConstants().MARATHI_POEM_DB_URL,
//        "language": "marathi"});
//    console.log(pCtx);
    console.log('props language '+props.language);
    return (
        <div>
            {props.language}
            Test content
            <ContentTabs />

        </div>
    )
}

