import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../index.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => (
  <div className="time-wrapper">
    <div className="time">{time}</div>
    <div>{dimension}</div>
  </div>
);

const Countdown = ({ EndRegistrationDate }) => {
  // EndRegistrationDate  UNIX time 
  const endTime = Math.floor(new Date(EndRegistrationDate).getTime() / 1000);
  const startTime = Math.floor(Date.now() / 1000);


  const remainingTime = endTime - startTime;

  if (remainingTime <= 0) {
    return <div className="text-red-600 font-bold mt-15 ml-5 md:ml-20 lg:text-center">Registration closed</div>;
  }

  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
   <div className="App grid grid-cols-2 md:grid-cols-3  gap-4">
      {/* Days */}
      <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => {
          const time = Math.floor((daysDuration - elapsedTime) / daySeconds);
          return <span style={{ color }}>{renderTime("days", time)}</span>;
        }}
      </CountdownCircleTimer>

      {/* Hours */}
      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => {
          const time = Math.floor(
            ((daySeconds - elapsedTime) % daySeconds) / hourSeconds
          );
          return <span style={{ color }}>{renderTime("hours", time)}</span>;
        }}
      </CountdownCircleTimer>

      {/* Minutes */}
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => {
          const time = Math.floor(
            ((hourSeconds - elapsedTime) % hourSeconds) / minuteSeconds
          );
          return <span style={{ color }}>{renderTime("minutes", time)}</span>;
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
