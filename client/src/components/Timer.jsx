import React from 'react';
import { useEffect, useMemo, useState } from 'react';

export default function Timer({ seconds, onComplete }) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => { setRemaining(seconds); }, [seconds]);
  useEffect(() => {
    if (remaining <= 0) {
      onComplete?.();
      return undefined;
    }
    const id = setInterval(() => setRemaining((value) => value - 1), 1000);
    return () => clearInterval(id);
  }, [remaining, onComplete]);
  const label = useMemo(() => {
    const minutes = Math.floor(remaining / 60).toString().padStart(2, '0');
    const secs = (remaining % 60).toString().padStart(2, '0');
    return minutes + ':' + secs;
  }, [remaining]);
  return <span className="timer">{label}</span>;
}
