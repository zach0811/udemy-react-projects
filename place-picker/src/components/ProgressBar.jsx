import { useEffect, useState } from "react";

export const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("starting interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
      console.log("clearing interval");
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
};
