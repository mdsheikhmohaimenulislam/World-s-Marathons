import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Countdown = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CountdownCircleTimer
        isPlaying
        duration={10} // countdown time in seconds
        colors="#00BFFF" // can also use array of colors for gradient
        onComplete={() => {
          // Called when timer completes
          console.log("Countdown finished");
          return { shouldRepeat: false }; // or true to loop
        }}
      >
        {({ remainingTime }) => <div>{remainingTime}</div>}
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
