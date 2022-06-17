import React from 'react';
import '../SearchPage/SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';


const SearchPage = (props) => {
  return (
    <div className='searchPage'>
         <div className="searchPage-filter">
            <TuneIcon />
            <h2>FILTER</h2>
         </div>
         <hr /> <br />

         <ChannelRow image="https://media-exp1.licdn.com/dms/image/C4E03AQGznLzyg7_0SA/profile-displayphoto-shrink_800_800/0/1599398598519?e=1658361600&v=beta&t=zCgMM8dcMZqyBrztwtzBtjz6pNMdcrKDiSFcACcB8sQ"
                     channel="Clever Programmer"
                     verified
                     subs="652K"
                     noOfVideos={386}
                     description="Clever Programmer is a community with over 100,000+ students who are learning to code by building real world projects. "
                        />
                    <br />
                    <hr />

{/* Mapping Video from API call */}
                 {props.videos?.map((video, index) => {
                      console.log(index)
                      
                               return (
                                   <VideoRow  key={index} 
                                              video1={video}
                                              views="1.5M"
                                              subs="659K"
                                              description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                                              timestamp=" 59 seconds ago" 
                                              channel="Clever Programmer" 
                                              title="Lets Build a Toutube Clonw with React JS" 
                                              image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"    
                                           />
                                             )
                                         })} 


         {/* <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2186302/settings_images/DgVFPRM9QCybdsbhNncn_fsm_cover_3x_720.png"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/0kiykrN9_Ng/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCDyLWFlWeEzmMoeFDv_mZ_GSJIRw"    
                         />


          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/ysmkJrgrV1o/maxresdefault.jpg"    
                         />

           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/Mu1I89BeKxM/maxresdefault.jpg"    
                         />


           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2186302/settings_images/DgVFPRM9QCybdsbhNncn_fsm_cover_3x_720.png"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/0kiykrN9_Ng/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCDyLWFlWeEzmMoeFDv_mZ_GSJIRw"    
                         />


          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/ysmkJrgrV1o/maxresdefault.jpg"    
                         />

           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/Mu1I89BeKxM/maxresdefault.jpg"    
                         />


           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"    
                         />

         <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2186302/settings_images/DgVFPRM9QCybdsbhNncn_fsm_cover_3x_720.png"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/0kiykrN9_Ng/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCDyLWFlWeEzmMoeFDv_mZ_GSJIRw"    
                         />


          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/ysmkJrgrV1o/maxresdefault.jpg"    
                         />

           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/Mu1I89BeKxM/maxresdefault.jpg"    
                         />


           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2186302/settings_images/DgVFPRM9QCybdsbhNncn_fsm_cover_3x_720.png"    
                         />

          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/0kiykrN9_Ng/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCDyLWFlWeEzmMoeFDv_mZ_GSJIRw"    
                         />


          <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/ysmkJrgrV1o/maxresdefault.jpg"    
                         />

           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://i.ytimg.com/vi/Mu1I89BeKxM/maxresdefault.jpg"    
                         />


           <VideoRow 
                    views="1.5M" 
                    subs="659K"
                    description="We are fundamentally changing the path to help more people become professional software developers. Our specialty is in training the web developers of tomorrow. " 
                    timestamp=" 59 seconds ago" 
                    channel="Clever Programmer" 
                    title="Lest Build a Toutube Clonw with React JS" 
                    image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"    
                         />

 */}

    </div>
  )
}

export default SearchPage;