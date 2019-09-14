import React, { Component, Fragment } from "react";
import DashborNav from "../../components/dashboardNav";
import CalendarNav from "./calendarNav";
import "./calendar.css";
import CalendarIco from "../../assets/ico/calendar.svg";
import Block from "../../assets/ico/block.svg";
import moment from "moment";
import All from "../../assets/ico/all.svg";
import Pause from "../../assets/ico/pause.svg";
import Play from "../../assets/ico/play.svg";
import Create from "../../assets/ico/create.svg";
import Facebook from "../../assets/ico/facebook.svg";
import Twitter from "../../assets/ico/twitter.svg";
import Posts from "./components/posts";
import NewPost from "./components/newPost";

const weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
const weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = moment.months();

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      // today: moment(),
      posts: false,
      newPost: true
    };
  }

  year = () => {
    return this.state.dateContext.format("Y");
  };

  month = () => {
    return this.state.dateContext.format("MMMM");
  };

  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };

  currentDate = () => {
    return this.state.dateContext.get("date");
  };

  currentDay = () => {
    return this.state.dateContext.format("D");
  };

  firstDayOfMonth = () => {
    const dateContext = this.state.dateContext;
    const firstDay = moment(dateContext)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  };

  selectMonth = month => {
    let monthNo = months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);

    this.setState({
      dateContext: dateContext
    });
  };

  onChangePosts = () => {
    this.setState({ posts: true });
  };

  onChangeNewPost = () => {
    this.setState({ newPost: true });
    // this.props.history.push
  };

  onChangeCalendar = () => {
    this.setState({ posts: false });
  };

  render() {
    // console.log('YEAR : ',moment().format('Y'))
    // console.log('MONTH :',moment().format('MMM'))
    // console.log('DAYSINMONTH :',moment().daysInMonth())
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

    // console.log("days: ", daysInMonth);

    const calendarShow = [...blanks, ...daysInMonth];

    const { posts } = this.state;

    if (this.state.newPost) {
      return <NewPost />;
    }
    return (
      <div className="calendar-container d-flex">
        <DashborNav />

        <CalendarNav change={this.selectMonth} data={months} />
        {posts ? (
          <Fragment>
            <div className="d-flex flex-column post-container div-post ">
              <div className="d-flex justify-content-between">
                <button onClick={this.onChangeNewPost} className="new-post">
                  NEW POST
                </button>
                <div>
                  <img
                    onClick={this.onChangeCalendar}
                    src={CalendarIco}
                    height="40"
                    alt="calendar ico"
                  />
                  <img src={Block} alt="block ico"></img>
                </div>
              </div>
              <Posts />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="d-flex flex-column calendar-div">
              <div className="d-flex div-post justify-content-between">
                <button onClick={this.onChangeNewPost} className="new-post">
                  NEW POST
                </button>
                <div>
                  <img src={CalendarIco} height="40" alt="calendar ico" />
                  <img
                    onClick={this.onChangePosts}
                    src={Block}
                    alt="block ico"
                  ></img>
                </div>
              </div>

              <div className=" d-flex justify-content-around ">
                {weekdaysShort.map((value, item) => {
                  return (
                    <div className="div-wekks" key={item}>
                      {value}
                    </div>
                  );
                })}
              </div>

              <div className="d-flex flex-wrap ">
                {calendarShow.map((value, index) => {
                  if (value < 10) {
                    return (
                      <div
                        className="text-white div-days d-flex justify-content-center align-items-center
                                        }"
                        key={index}
                      >
                        {`0${value}`}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="text-white div-days d-flex justify-content-center align-items-center
                                        }"
                        key={index}
                      >
                        {value}
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            {/**************************** STATUS POST ******************************888888********8 */}

            <div className="status-post">
              <h2 className="text-white">STATUS POST</h2>

              <div className="d-flex ">
                <div className="ico-general ico-color-1 d-flex justify-content-center align-items-center ">
                  <img src={All} alt="all ico" />
                </div>

                <div className="ico-general border-ico d-flex justify-content-center align-items-center ">
                  <img src={Create} alt="create ico" />
                </div>

                <div className="ico-general  border-ico d-flex justify-content-center align-items-center">
                  <img src={Pause} alt="pause ico" />
                </div>

                <div className="ico-general  border-ico d-flex justify-content-center align-items-center ">
                  <img src={Play} alt="play ico" />
                </div>
              </div>

              <div className="d-flex">
                <div className="ico-general ico-color-3 d-flex justify-content-center align-items-center">
                  <img src={Create} alt="all ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                  <img src={Pause} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-1 d-flex force-width justify-content-center align-items-center">
                  <img src={Play} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>
              <hr />

              <div className="d-flex">
                <div className="ico-general ico-color-3 d-flex justify-content-center align-items-center">
                  <img src={Create} alt="all ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                  <img src={Pause} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-1 force-width force-width d-flex justify-content-center align-items-center">
                  <img src={Play} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />

              <div className="d-flex">
                <div className="ico-general ico-color-3   d-flex justify-content-center align-items-center">
                  <img src={Create} alt="all ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                  <img src={Pause} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-1 force-width d-flex justify-content-center align-items-center">
                  <img src={Play} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className=" ico-general ico-color-3 d-flex justify-content-center align-items-center">
                  <img src={Create} alt="all ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                  <img src={Pause} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>

              <hr />
              <div className="d-flex">
                <div className="ico-general ico-color-1 force-width d-flex justify-content-center align-items-center">
                  <img src={Play} alt="pause ico" />
                </div>
                <div className="text-white">
                  <span>Aug08/2019</span>
                  <br />
                  <img src={Facebook} alt="facebook ico" />
                  <img src={Twitter} alt="twitter ico" />
                </div>
                <p className="text-white">
                  lectus quis malesuada malesuada, nisi est congue ligula, sed
                  aliquet lectus sapien eu quam.
                </p>
              </div>
            </div>
            {/* *********** STATUS POST ***************************** */}
          </Fragment>
        )}
      </div>
    );
  }
}

export default Calendar;
