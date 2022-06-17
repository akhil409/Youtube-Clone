import React from 'react';
import '../ChannelRow/ChannelRow.css';
import { Avatar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ChannelRow = ({image ,channel ,subs ,noOfVideos ,description ,verified}) => {
  return (
    <div className='channelRow'>
           <Avatar className='channelRow-logo' alt={channel} src={image}/>
            <div className="channelRow-text">
                   <h4>{channel} {verified && <CheckCircleOutlineIcon />} </h4>
                   <p>
                       {subs} subscribers . {noOfVideos} videos
                   </p>
                   <p>{description}</p>
            </div>
    </div>
  )
}

export default ChannelRow