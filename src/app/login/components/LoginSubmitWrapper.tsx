'use client';

import React from 'react';

interface LoginSubmitWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const LoginSubmitWrapper: React.FC<LoginSubmitWrapperProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        w-full
        max-w-[260px]
        text-base
        sm:max-w-[300px]
        sm:text-sm
        md:max-w-[300px]
        md:text-sm
        lg:max-w-[320px]
        lg:text-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default LoginSubmitWrapper;
