import React, { useEffect, useState } from 'react';

function Clock() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [amPm, setAmPm] = useState('');

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function showClock() {
    const currentDate = new Date();
    setDay(currentDate.getDate());
    setMonth(currentDate.getMonth() + 1); // January is 0, so we need to add 1
    setYear(currentDate.getFullYear());
    setHour(currentDate.getHours());
    setMinute(currentDate.getMinutes());
    setSecond(currentDate.getSeconds());
    setDayOfWeek(dayNames[currentDate.getDay()]);
    setAmPm(currentDate.getHours() < 12 ? 'AM' : 'PM');
  }

  useEffect(() => {
    setInterval(showClock, 1000); // Run the showClock function every 1000 milliseconds

      }, []);

  return (
    <div>
      <div id="clock">
        {`${dayOfWeek}, ${day}/${month}/${year}`}
        <br />
        {`${hour.toString().padStart(2, '0')}:${minute
          .toString()
          .padStart(2, '0')}:${second.toString().padStart(2, '0')} ${amPm}`}
      </div>
    </div>
  );
}

export default Clock;
