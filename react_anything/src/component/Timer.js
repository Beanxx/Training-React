import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    // setInterval(): 일정 시간 간격을 두고 함수 실행
    // 1초마다 timer 반복
    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    // 정리작업을 해주는 함수 -> 타이머 종료
    return function cleanup() {
      clearInterval(timer);
      console.log("Finish Timer");
    };
  }, []);

  return (
    <div>
      <span>Start Timer. Show Console!!</span>
    </div>
  );
};

export default Timer;
