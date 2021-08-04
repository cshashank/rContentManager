
export const MARATHI_POEM__DB__URL = "marathiPoemURL";


export const UtilConstants=() =>{
    return {
        MARATHI_POEM_DB_URL: "data/marathiPoemsDb.json",
        MARATHI_ARTICLE_DB_URL: "data/marathiArticlesDb.json"
    }

}

export const Paginate=(data,pageNumber,pageLength)=>{
//    let pageNumber = 0;
//    let pageLength = 4;

    let startData = pageNumber*pageLength;
    let endData = startData+pageLength;

    console.log('startData is %s',startData);
    console.log('endData is %s', endData);
 
    console.log(' data length '+data.length);
    console.log('sliced '+data.slice(1,3));
    return data.slice(startData, endData);
}


