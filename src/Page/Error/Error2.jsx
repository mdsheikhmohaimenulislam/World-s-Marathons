import React from 'react';
import Lottie from 'react-lottie';
import animation from '/public/Animation.json';

const Error2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,

  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Error2;
