import { Timer } from '../hooks/useTimer';

function Clock({ time } : { time: Timer }) {
  return (
    <div>{`${time.hours}:${time.minutes}:${time.seconds}`}</div>
  );
}

export default Clock;
