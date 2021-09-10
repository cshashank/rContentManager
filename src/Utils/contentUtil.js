
export const MARATHI_POEM__DB__URL = "marathiPoemURL";


export const UtilConstants=() =>{
    return {
        MARATHI_POEM_DB_URL: "data/marathiPoemsDb.json",
        MARATHI_ARTICLE_DB_URL: "data/marathiArticlesDb.json"
    }

}

export const fetchDbUrls=(language)=>{
    let dbUrls={}
    if(language=="marathi"){
        dbUrls = {
            poemURL: "data/marathiPoemsDb.json",
            articleURL: "data/marathiArticlesDb.json"
        }
    } else if (language == "english"){
        dbUrls = {
            poemURL: "data/englishPoemsDb.json",
            articleURL: "data/englishArticlesDb.json"
        }

    }else{
        dbUrls = {
            poemURL: "data/hindiPoemsDb.json",
            articleURL: "data/hindiArticlesDb.json"
        }
    }

    return dbUrls;
}

function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const Paginate=(data,pageNumber,pageLength)=>{
//    let pageNumber = 0;
//    let pageLength = 4;

    data.sort(custom_sort);
    let startData = pageNumber*pageLength;
    let endData = startData+pageLength;
    console.log('page number is %s',pageNumber);
    console.log('page startData is %s',startData);
    console.log('page endData is %s', endData);
 
   // console.log(' page data length '+data.length);
    let dataSlice = data.slice(startData, endData);
/*     dataSlice.map((item,index)=>(
        console.log('page item name '+item.name)
    ));
 *///    console.log('page sliced ' + data.slice(startData, endData));
    return data.slice(startData, endData);
}


