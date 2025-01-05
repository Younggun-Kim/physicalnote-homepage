import React from 'react';
import { cls } from '@/utils';
import RegUtils from '@/utils/regUtils';

type PickInputAttribute = Pick<HTMLInputElement, 'name' | 'type' | 'placeholder' | 'value'>;

interface Props extends PickInputAttribute {
  maxLength?: number;

  onChange(text: string): void;

  enabled?: boolean;
  isOnlyNum?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Input = ({
  type,
  name,
  placeholder,
  value,
  className = '',
  enabled = true,
  maxLength,
  isOnlyNum,
  onChange,
  children,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (isOnlyNum && !RegUtils.numberMatch(e.target.value)) return;

    onChange(e.target.value);
  };
  return (
    <div
      className={cls(
        'rounded-full px-5 py-4 bg-white shadow-md overflow-hidden',
        'flex justify-between items-center',
        className,
      )}
    >
      <input
        type={type}
        name={name}
        disabled={!enabled}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        className="w-full font-sans font-normal text-black text-sm placeholder-gray2 outline-none hover:outline-none hover:border-none disabled:bg-white"
      />
      {children}
    </div>
  );
};
export default Input;
