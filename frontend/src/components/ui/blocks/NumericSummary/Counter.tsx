'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface ICounterProps extends React.ComponentProps<'span'> {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  prefixClassName?: string;
  suffix?: string;
  suffixClassName?: string;
  animated?: boolean;
}

function easeFunction(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -11 * x);
}

export default function Counter({
  start = 0,
  end,
  duration = 2500,
  animated = false,
  prefix,
  prefixClassName,
  suffix,
  suffixClassName,
  ...props
}: ICounterProps) {
  const [value, setValue] = useState<number>(animated ? start : end);
  const delay = 25;
  const range = end - start;
  const progress = useRef({
    value: start,
    time: 0,
  });

  const startCount = useCallback(() => {
    if (progress.current.value < end) {
      progress.current.value =
        start + range * easeFunction(Math.min(progress.current.time / duration, 1));
      if (progress.current.value >= end) {
        setValue(end);
        return;
      }
      setValue(Math.ceil(progress.current.value));
      progress.current.time += delay;
      setTimeout(startCount, delay);
    }
  }, [duration, end, range, start]);

  useEffect(() => {
    if (animated) {
      startCount();
    }
  }, [animated, startCount]);

  return (
    <span {...props}>
      {prefix ? <span className={prefixClassName}>{prefix}</span> : null}
      {value}
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </span>
  );
}
