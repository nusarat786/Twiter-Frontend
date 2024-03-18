import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Redirect, Link } from 'react-router-dom';
import Login from "./comp/AuthComponents/Login";
import Home from './comp/TweetComponent/Home';
import Tweet from './comp/TweetComponent/Tweet';
import Register from './comp/AuthComponents/Register';
import { isLogined } from './comp/Utility/Code';
import TweetByUserId from './comp/TweetComponent/TweetByUserId';
import { TweetCardList } from './comp/TweetComponent/TweetD';

import TweetCard from './comp/TweetComponent/tweetcard';
import { TweetCardList2 } from './comp/TweetComponent/TweetD2';
import TwitterMenuSlider from './comp/TweetComponent/TwitterMenuSlider'
import ProfileCard from './comp/TweetComponent/ProfileCard';
import TweetSingle from './comp/TweetComponent/TweetSingle';
import { TweetCardList4 } from './comp/TweetComponent/TweetD4';
import { Comments } from './comp/TweetComponent/Comments';
import { Comments2 } from './comp/TweetComponent/Comments 2';
import HomeGet from './comp/TweetComponent/HomeGet';
import GetHastagsTweet from './comp/TweetComponent/GetHastagsTweet';
import MainLayout from './comp/Utility/Nav';
import { getCookie } from './comp/Utility/Code';
import './nav.css'
import './index.css'
import ForgetPassword from './comp/AuthComponents/ForgetPassword';
import ScaerchUser from './comp/TweetComponent/ScaerchUser';
import ProfileCard3 from './comp/TweetComponent/ProfileCard3'; 
import TwitterMenuSliderUser from './comp/TweetComponent/TwitterMenuSliderUser';
import Update from './comp/AuthComponents/Update';

function App() {
  const [islogined, setIsLogined] = useState(isLogined());

  useEffect(() => {
    setIsLogined(isLogined());
  }, []);

  

  return (
    <>
    
    <Router>

      <div className='m-10 '>
        <MainLayout islogined={islogined}/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        {console.log(islogined)}

          <Route path='/login' element={<Login islogined={islogined}/>} />
          <Route path='/register' element={<Register islogined={islogined} />} />
          

          

          
          
      </Routes>
      
    </Router>

  
    </>
  );
}

export default App;
