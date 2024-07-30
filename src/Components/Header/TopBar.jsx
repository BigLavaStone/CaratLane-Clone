// src/components/TopBar.jsx
import React, { useState, useEffect } from 'react';
import './TopBar.css';

function TopBar() {
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFirstMessage(prevState => !prevState);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  [1,2,3,4,5,8] 
  return (
    <>
    <div className={'top-bar'}>
      <div className={`inner-bar ${isFirstMessage ? 'first' : 'second'}`}>CaratLane - A Tanishq Partnership</div>
      <div className={`inner-bar ${isFirstMessage ? 'second' : 'first'}`}>
        Introducing CaratLane 8 months PoP! Plan your purchase <a href="#" style={{ color: "#e7b1c1" }}>
            here
          </a>
      </div>
    </div>
    </>
  );
}

export default TopBar;

