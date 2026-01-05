import { useEffect, useState } from "react";
import './Clock.css';

export function Clock({ is24hour }) {

  function getTimeString(is24hour) {
    return ((new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24hour
    }));
  }

  const [time, setTime] = useState(getTimeString(is24hour));
  const [dateInfo, setDateInfo] = useState("null");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeString(is24hour));
    }, 1000)

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const dateObj = new Date();
    const date = dateObj.getDate();
    const day = days[dateObj.getDay()];
    const month = months[dateObj.getMonth()];
    setDateInfo(`${day}, ${date} ${month}`);

    return (() => { clearInterval(timer) });
  }, [is24hour])

  return (
    <>
      {time &&
        <div className="clock-container">
          <div className="clock">
            {time}
          </div>
          <div className="date-info">
            {dateInfo}
          </div>
        </div>
      }
    </>
  );
} 