import { MutableRefObject, useEffect, useRef, useState } from 'react';

export class Timer {
  constructor(
    public seconds: number = 0,
    public minutes: number = 0,
    public hours: number = 0,
  ) {}

  totalTime(): number {
    return (this.hours * 360) + (this.minutes * 60) + this.seconds;
  }
}

export default function useTime(): [Timer, (f: Timer) => void,
  boolean, (f: boolean) => void, MutableRefObject<number>] {
  const [time, setTime] = useState(new Timer());
  const [start, setStart] = useState(false);
  const timerRef = useRef(time.totalTime());

  useEffect(() => {
    if (start) {
      const id = setInterval(() => {
        console.log(timerRef.current);
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
          clearInterval(id);
          return;
        }
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

  return [time, setTime, start, setStart, timerRef];
}
