import React from 'react';

// const weeks = ['Jan','Feb','Sea','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov' ,'Dec']

const CalendarNav = (props)=>{

    const { data,log} = props
    console.log('props for calendarNav',props)
    

    return(
        <div className='calendar-nav d-flex flex-column text-center  '>
            
                {data.map((value,key)=>{
                   return <li  onClick={(e)=>props.log(value)} key={key}>   
                            {value.substr(0,3)}
                          </li>
                })}
        
        </div>
    )
}

export default CalendarNav