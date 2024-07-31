import { useEffect, useState } from 'react';

export class Timer {
  constructor(
    public seconds: number = 0,
    public minutes: number = 0,
    public hours: number = 0,
  ) {
  }
}

export default function useTime(): [Timer, (f: Timer) => void,
  boolean, (f: boolean) => void] {
  const [time, setTime] = useState(new Timer());
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const id = setInterval(() => {
        time.seconds -= 1;
        if (time.seconds < 0) {
          time.seconds = 59;
          time.minutes -= 1;
        } if (time.minutes < 0) {
          time.minutes = 59;
          time.hours -= 1;
        } if (time.hours < 0) {
          clearInterval(id);
          return;
        }
        const newTimer = new Timer(time.seconds, time.minutes, time.hours);
        setTime(newTimer);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [start]);

  return [time, setTime, start, setStart];
}
