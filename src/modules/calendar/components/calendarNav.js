import React from "react";

const CalendarNav = props => {
  const { data, change } = props;

  return (
    <div className="calendar-nav d-flex flex-column text-center  ">
      {data.map((value, key) => {
        return (
          <li onClick={e => change(value)} key={key}>
            {value.substr(0, 3)}
          </li>
        );
      })}
    </div>
  );
};

export default CalendarNav;
