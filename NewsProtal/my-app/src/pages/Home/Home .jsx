import React, { useEffect } from 'react';
import Header from '../sheard/Header/Header';

import RightSideNaveBer from '../sheard/RightNavber.jsx/RightSideNaveBer';
import LeftSideNaveBer from '../sheard/leftNavber/leftsidenavber';
import BrekingNews from './brekingnrws';
import { useState } from 'react';
import NewsProtal from './newsportal';


const Home = () => {

    const[news,setNews] = useState([])

        useEffect(() => {
            fetch('news.json')
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => setNews(data))
                .catch(error => console.error('Error fetching categories:', error));
    },[])
    return (
        <div>
          
            <Header></Header>
            <BrekingNews></BrekingNews>
            
            

            {/* news section */}

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>

                <div>
                    <RightSideNaveBer></RightSideNaveBer>
                </div>
                <div className='col-span-2'>
               {
                news.map(newsportal => (
                  
                <div  className='p-4'>
                      <NewsProtal key={newsportal.id} news={newsportal}></NewsProtal>
                     
                </div>
                ))
               } 
                 
                </div>
                <div>
                    <LeftSideNaveBer></LeftSideNaveBer>
           
                </div>
            </div>


        </div>
    );
};

export default Home;