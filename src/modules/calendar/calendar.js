import React,{ Component } from 'react';
import DashborNav from '../../components/dashboardNav'
import CalendarNav from './calendarNav'
import './calendar.css'
import CalendarIco from  '../../assets/ico/calendar.svg'

const momentFake = [ 1 , 2 , 3 , 4 , 5 , 6, 7 , 8 , 9 ,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const momentFakeWekks=['S','M','T','W','T','F','S']



class Calendar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='calendar-container d-flex'>
                
                <DashborNav/>

                <CalendarNav/>

                <div className='d-flex flex-column calendar-div' >
                    <div className='d-flex div-post justify-content-between'>
                        <button className='new-post' >
                            NEW POST 
                        </button>
                        <div>
                            <img src={CalendarIco} alt='calendar ico'/>
                        </div>
                    </div>

                    <div className=' d-flex justify-content-around '>
                        {momentFakeWekks.map((value,item)=>{
                            return <div className='div-wekks' key={item}>{value}</div>
                        })}
                    </div>

                    <div className='d-flex flex-wrap '>
                        {momentFake.map((value,index)=>{
                            return <div className='text-white text-center div-days' key={index} >{value}</div>
                        })} 

                    </div>
                </div>
                
            </div>
        )
    }
}

export default Calendar