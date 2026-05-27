import { useEffect, useState } from "react";
import './Clock.css';

export function Clock({ is24Hour, getTimeString}) {

  function getDateString() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const dateObj = new Date();
    const date = dateObj.getDate();
    const day = days[dateObj.getDay()];
    const month = months[dateObj.getMonth()];
    return `${day}, ${date} ${month}`;
  }

  const [time, setTime] = useState(getTimeString(is24Hour));
  const [dateInfo, setDateInfo] = useState(getDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeString(is24Hour));
    }, 1000)

    setDateInfo(getDateString());

    return (() => { clearInterval(timer) });
  }, [is24Hour, getTimeString])

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          {time}
        </div>
        <div className="date-info">
          {dateInfo}
        </div>
      </div>
    </>
  );
} 