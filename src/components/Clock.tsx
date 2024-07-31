import { Timer } from '../hooks/useTimer';

function Clock({ time } : { time: Timer }) {
  return (
    <p className="text-6xl font-bold">
      {`${time.hours}:${time.minutes}:${time.seconds}`}
    </p>
  );
}

export default Clock;
