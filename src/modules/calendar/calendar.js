import React,{ Component } from 'react';
import DashborNav from '../../components/dashboardNav'
import CalendarNav from './calendarNav'
import './calendar.css'
import CalendarIco from  '../../assets/ico/calendar.svg'
import Block from '../../assets/ico/block.svg'
import moment from 'moment'








const weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
const weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = moment.months();



class Calendar extends Component{
    constructor(props){
        super(props)
        this.state={
            dateContext: moment(),
            // today: moment(),

        }
    }
    


    year = () => {
        return this.state.dateContext.format("Y");
    }

    month = () => {
        return this.state.dateContext.format("MMMM");
    }

    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }

    currentDate = () => {
        return this.state.dateContext.get("date");
    }

    currentDay = () => {
        return this.state.dateContext.format("D");
    }


    firstDayOfMonth = () => {
        const dateContext = this.state.dateContext;
        const firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;

    }
    



    SelectMonth=(data)=>{

        let monthNo = months.indexOf(data);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("months", monthNo);
      
        this.setState({
            dateContext: dateContext
        });



    }
     
    
    render(){

        // console.log('YEAR : ',moment().format('Y'))
        // console.log('MONTH :',moment().format('MMM'))
        console.log('DAYSINMONTH :',moment().daysInMonth())
        // console.log('CURRENTDATE :',moment().get('date'))
        // console.log('CURRETDAY :',moment().format('D'))


        const blanks = [];

        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(" ");
        }
        // console.log("blanks: ", blanks);


        const daysInMonth = [];

        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(d);

        }
        console.log("days: ", daysInMonth);
        
        const calendarShow = [ ...blanks, ...daysInMonth]
        

        return (
            <div className='calendar-container d-flex'>
                
                <DashborNav/>

                <CalendarNav log={this.SelectMonth} data={months}/>
                

                <div className='d-flex flex-column calendar-div' >
                    <div className='d-flex div-post justify-content-between'>
                        <button className='new-post' >
                            NEW POST 
                        </button>
                        <div>
                            <img src={CalendarIco} height='40' alt='calendar ico'/>
                            <img src={Block} alt='block ico'></img>
                        </div>
                    </div>


                    <div className=' d-flex justify-content-around '>
                        {  weekdaysShort.map((value,item)=>{
                            return <div className='div-wekks' key={item}>{value}</div>
                        })}
                    </div>

                    <div className='d-flex flex-wrap '>

                        {calendarShow.map((value,index)=>{
                                if(value < 10){
                                        return <div className='text-white div-days d-flex justify-content-center align-items-center
                                    }' key={index} >
                                                    {`0${value}`}
                                            </div>
                                }else{
                                        return <div className='text-white div-days d-flex justify-content-center align-items-center
                                    }' key={index} >
                                                    {value}
                                            </div>
                                }
                                
                        })}
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Calendar