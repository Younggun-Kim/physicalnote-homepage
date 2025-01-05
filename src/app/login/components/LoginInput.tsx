import React from 'react';
import Input from '@/app/components/input/Input';

type PickInputAttribute = Pick<HTMLInputElement, 'name' | 'type' | 'placeholder' | 'value'>;

export interface InputProps extends PickInputAttribute {
  className?: string;
  isOnlyNum?: boolean;
  enabled?: boolean;
  maxLength?: number;
  onChange(text: string): void;
  children?: React.ReactNode;
}

export default function LoginInput({
  type,
  name,
  placeholder,
  value,
  enabled = true,
  isOnlyNum = false,
  maxLength,
  onChange,
  children,
}: InputProps) {
  return (
    <Input
      className={`w-full max-w-[300px] !py-0 h-10 sm:h-12 sm:max-w-[400px]`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      enabled={enabled}
      isOnlyNum={isOnlyNum}
      maxLength={maxLength}
      onChange={onChange}
    >
      {children}
    </Input>
  );
}
