import React from 'react';
import './VideoCard.css';
import { Avatar } from '@mui/material';

const VideoCard = ({ title, channel, image, timestamp, views, channelImage }) => {
  return (
    <div className='videoCard'>
         <img className='videoCard-Thumbnail' src={image} alt=''/>
         <div className='videoCard-Info'>
             <Avatar  className='videoCard-Avatar' alt={channel} src={channelImage}/>
             <div className="videoCard-Text">
                   <h4>{title}</h4>
                   <p>{channel}</p>
                   <p>{views} . {timestamp}</p>

                   
             </div>
         </div>
    </div>
  )
}

export default VideoCard