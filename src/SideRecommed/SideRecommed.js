import React from 'react';
import RecommendedVideos from '../Recommendedvideos/RecommendedVideos';
import Sidebar from '../Sidebar/Sidebar';


const SideRecommed = () => {
  return (
    <div className="app-page">
              <Sidebar />
              <RecommendedVideos />
    </div>
  )
}

export default SideRecommed;