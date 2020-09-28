import { useEffect, useRef, useState, useCallback } from 'react';

const useIsMounted = (): (() => boolean) => {
  const ref = useRef(false);
  const [, setIsMounted] = useState(false);
  useEffect(() => {
    ref.current = true;
    setIsMounted(true);
    return () => {
      ref.current = false;
    };
  }, []);

  const isMounted = useCallback(() => ref.current, []);

  return isMounted;
};

export default useIsMounted;
