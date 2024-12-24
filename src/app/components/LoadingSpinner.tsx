'use client';

import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LoadingSpinner = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isFetching || isMutating) {
      timeout = setTimeout(() => setShowLoading(true), 200);
    } else {
      setShowLoading(false);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isFetching, isMutating]);

  return showLoading ? (
    <div className="fixed w-full h-full z-[999] flex justify-center items-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  ) : null;
};

export default dynamic(() => Promise.resolve(LoadingSpinner), {
  ssr: false,
});
