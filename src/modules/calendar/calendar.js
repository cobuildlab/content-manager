import React,{ Component } from 'react';
import DashborNav from '../../components/dashboardNav'
import CalendarNav from './calendarNav'
import './calendar.css'

const momentFake = [ 1 , 2 , 3 , 4 , 5 , 6, 7 , 8 , 9 ,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]




class Calendar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='calendar-container'>
                <DashborNav/>
                <CalendarNav/>
                {/* <div className='d-flex div-calendar align-content-start justify-content-around flex-wrap' >
                    {momentFake.map((value,index)=>{
                    return <div key={index} >{value}</div>
                    })}
                </div> */}
            </div>
        )
    }
}

export default Calendar