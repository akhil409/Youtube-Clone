 
 export const getData = async (url, data) => { 
    let fetchedData = await fetch(url, data).then((resp) => resp.json());
    return fetchedData;
 }