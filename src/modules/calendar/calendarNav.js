import React from 'react';

const weeks = ['Jan','Feb','Sea','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov' ,'Dec']

const CalendarNav = ()=>{

    return(
        <div className='calendar-nav d-flex flex-column justify-content-around'>
            
                {weeks.map((value,key)=>{
                   return <li key={key}>{value}</li>
                })}
        
        </div>
    )
}

export default CalendarNav