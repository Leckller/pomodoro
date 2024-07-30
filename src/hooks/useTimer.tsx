import { useEffect, useState } from 'react';

export class Timer {
  constructor(public seconds: number, public minutes: number, public hours: number) {
  }
}

export default function useTime() {
  const [time, setTime] = useState(new Timer(10, 0, 0));
  useEffect(() => {
    const id = setInterval(() => {
      time.seconds -= 1;
      if (time.seconds < 0) {
        time.seconds = 60;
        time.minutes -= 1;
      } if (time.minutes < 0) {
        time.minutes = 60;
        time.hours -= 1;
      } if (time.hours < 0) {
        clearInterval(id);
        return;
      }
      const newTimer = new Timer(time.seconds, time.minutes, time.hours);
      setTime(newTimer);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
