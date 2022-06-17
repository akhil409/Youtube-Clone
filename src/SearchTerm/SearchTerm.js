import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getData } from '../API-calls/fetchRequest';
import SearchPage from '../SearchPage/SearchPage';
import Sidebar from '../Sidebar/Sidebar';
import { youtubeUrls } from '../YoutubeAPi/urls';

const SearchTerm = () => {
  const params = useParams();
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    console.log(params);
    getData(youtubeUrls.searchUrl(params.searchTerm)).then((data) => {
      console.log(data)
      setvideos(data.items)
    })
    // api call
    // set videos 
  },[])
  

  return (
    <div className="app-page">
                  <Sidebar />
                  <SearchPage videos={videos} />
     </div>
  )
}

export default SearchTerm;