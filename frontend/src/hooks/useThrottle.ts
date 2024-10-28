/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useCallback, useRef } from "react";


function useThrottle(callback: Function, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledCallback = useCallback(
    (...args: any) => {
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          timeoutRef.current = null;
        }, delay);
      }
    },
    [callback, delay]
  );

  return throttledCallback;
}

export default useThrottle;