import React from 'react';
import Button from '@/app/components/Button';

interface Props {
  containerClassName?: string;
  className?: string;
  text?: string;
  onClick?: () => void;
}

const LoginButton = ({ containerClassName, className = '', text = '', onClick }: Props) => {
  return (
    <Button
      containerClassName={containerClassName}
      className={`
        w-full max-w-[260px] h-10 text-gray-900 font-['Noto_Sans_KR'] text-sm font-bold
        sm:max-w-[300px] sm:text-base
        md:max-w-[300px] md:text-base
        lg:max-w-[320px] lg:h-12
        ${className}
      `}
      onClick={onClick}
      text={text}
    />
  );
};

export default LoginButton;
