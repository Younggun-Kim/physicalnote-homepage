import React from 'react';
import Image from 'next/image';

interface Props {
  isOn: boolean;
  onClick?: (isChecked: boolean) => void;
}

const RadioBtn = ({ isOn, onClick }: Props) => {
  const getSrc = () => {
    return isOn ? '/icons/radio_on.svg' : '/icons/radio_off.svg';
  };
  return (
    <button
      className="w-6 h-6"
      onClick={() => {
        onClick && onClick(!isOn);
      }}
    >
      <Image
        src={getSrc()}
        width={24}
        height={24}
        alt="radio"
      />
    </button>
  );
};

export default RadioBtn;
