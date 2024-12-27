import React from 'react';
import Image from 'next/image';

interface Props {
  isChecked: boolean;
  onClick?: (isChecked: boolean) => void;
}

export const CheckBox = ({ isChecked, onClick }: Props) => {
  const getSrc = () => {
    return isChecked ? '/icons/checkBoxOn.svg' : '/icons/checkBoxOff.svg';
  };
  return (
    <button
      className="w-[18px] h-[18px]"
      onClick={() => {
        onClick && onClick(!isChecked);
      }}
    >
      <Image
        src={getSrc()}
        width={18}
        height={18}
        alt="checkbox"
      />
    </button>
  );
};

export default CheckBox;
