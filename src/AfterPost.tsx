import React from 'react';
//import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import './AfterPost.css';
import { CiCalendar } from "react-icons/ci";

function AfterPost() {
    return(
        <div className='flex flex-col gap-y-10 items-center pb-10 bg-white'>
            <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#227C9D', color: '#ffffff' }}>
                <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
                <h1 className='text-5xl'>BeKindly</h1>
                <div className="flex items-center">
                    <div className="text-6xl text-black"><CiCalendar /></div>
                    <div className="rounded-full bg-slate-100 p-7"></div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats stats-vertical lg:stats-horizontal text-center text-black bg-white">
  
                <div className="stat p-4">
                    <div className="stat-value">10K</div>
                    <div className="stat-title text-black">Challenges Completed Globally</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
                <div className="stat">
                    <div className="stat-value">517</div>
                    <div className="stat-title text-black">Challenges Completed Today</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
                <div className="stat">
                    <div className="stat-value">12</div>
                    <div className="stat-title text-black">Challenges Completed by You</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
            </div>

            
            {/* Timer Section */}
            <div className='text-center text-black'>
                <h1 className='text-4xl font-bold mr-4'>04:43:07</h1>
                {/* Add stats component here */}
            </div>

            {/* Card */}
            <h2 className="text-3xl text-black">Today's Challenge</h2>
            <div className="card card-compact w-96 bg-base-100 shadow-xl bg-white">
                <figure className='shadow pb-1 bg-slate-200'><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Challenges" /></figure>
                <div className="card-body flex flex-wrap ">
                    <p className='font-bold text-lg mb-24 text-center text-black'>Will be your experience information</p>
                     <div className="card-actions -m-8 justify-center">
                        {/* Button for nav */}
                        <button className="text-lg pl-12 pr-12 pt-1 pb-1 rounded-full " style={{ display: 'flex', alignItems: 'center', backgroundColor: '#227C9D', color: 'white'}}>
                            
                            Achieved
                        </button>
                        {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AfterPost;