'use client';

import { useState, useEffect } from 'react';

export const useMediaQuery = (width: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(max-width: ${width}px)`;
    const mediaQuery = window.matchMedia(query);

    setMatches(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [width]);

  return matches;
};

// const isMobile = useMediaQuery(768);
