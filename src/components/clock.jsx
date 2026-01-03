import { useEffect, useState } from "react";
import './clock.css';

export function Clock() {
  const [time, setTime] = useState(null);
  const [dateInfo, setDateInfo] = useState("null");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((new Date()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }));
    }, 1000)

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const dateObj = new Date();
    const date = dateObj.getDate();
    const day = days[dateObj.getDay()];
    const month = months[dateObj.getMonth()];
    console.log(dateObj.getDay());
    setDateInfo(`${day}, ${date} ${month}`);

    return (() => { clearInterval(timer) });
  }, [])

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