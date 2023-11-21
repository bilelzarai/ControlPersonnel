import { useEffect, useState } from "react";

// import "./style.css";

const CountDownDate = ({deadline}) => {


  const [time, setTime] = useState(
    Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
  );
  const [restTime, setRestTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const decrement = () =>
    setTime((prevTime) => {
      return prevTime === 0 ? 0 : prevTime - 1;
    });

  useEffect(() => {
    const id = setInterval(decrement, 1000);
    setRestTime((restTime) => ({
      ...restTime,
      days: format(Math.floor(time / (3600 * 24))),
      hours: format(Math.floor((time / 3600) % 24)),
      minutes: format(Math.floor((time / 60) % 60)),
      seconds: format(time % 60),
    }));

    return () => clearInterval(id);
  }, [time]);

  const format = (num) => {
    return num < 10 ? "0" + num : num.toString();
  };

 
  console.log(restTime, 33333);

  return (
    // {restTime}
    <div>
      <h1>
        Time until: {deadline.toDateString() + " " + deadline.toTimeString()}
      </h1>
      <div>Days: {restTime?.days}</div>
      <div>Hours: {restTime?.hours}</div>
      <div>Minutes: {restTime?.minutes}</div>
      <div>Seconds: {restTime?.seconds}</div>
    </div>
  );
};
export default CountDownDate;
