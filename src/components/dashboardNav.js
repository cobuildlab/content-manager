import React from 'react';
import Home from '../assets/ico/home.svg'
import Calendar from '../assets/ico/calendar.svg'
import Stast from '../assets/ico/Stats.svg'
import Video from '../assets/ico/video.svg'
import Settings from '../assets/ico/Settings.svg'
import Logout from '../assets/ico/log-out.svg'


const DashborNav = ()=>{
    return(
        <div className='d-flex flex-column text-center dashboard-nav'>
                <li>
                    <img src={Home} alt='home icon'/>
                </li>
                <li><img src={Calendar} alt='calender icon'></img></li>
                <li><img src={Stast} alt='stast icon'/></li>
                <li><img src={Video} alt='video icon'/></li>
                <li><img src={Settings} alt='settings icon'/></li>
                <li className='logout-icon'><img src={Logout} alt='logout ico'/></li>
            
        </div>
    )
}


export default DashborNav