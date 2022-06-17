import React, { useState } from 'react';
import '../Header/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';


const Header = (props) => {
  const [inputSearch , setInputSearch] = useState('');


  return (
    <div className='header'>
       <div className="header-left">
              <MenuIcon />
              <Link to='/'>
                <img className='youtubeLogo' src="https://www.theheadboardworkshop.co.uk/advice/wp-content/uploads/2020/02/502px-Logo_of_YouTube_2015-2017.svg_.png" alt="" /> 
              </Link>
        </div>
          
          <div className="header-center">
              <input onChange={(e) => setInputSearch( e.target.value )} 
                     value={inputSearch} 
                     type="text" 
                     placeholder='Search'
                     id='seacrhbtn' />

              <Link to={`/search/${inputSearch}`}>
                 <SearchIcon  className='input-searchbtn'/>
              </Link>
              
          </div>

          <div className="header-icons">
               <VideoCallIcon className='header-icon' />
               <AppsIcon className='header-icon' />
               <NotificationsIcon className='header-icon' />
               <Avatar className='header-icon' alt='Akhil Alladi' src="https://media-exp1.licdn.com/dms/image/C4E03AQGznLzyg7_0SA/profile-displayphoto-shrink_800_800/0/1599398598519?e=1658361600&v=beta&t=zCgMM8dcMZqyBrztwtzBtjz6pNMdcrKDiSFcACcB8sQ"/>
          </div>
    
    

    </div>
  )
}

export default Header