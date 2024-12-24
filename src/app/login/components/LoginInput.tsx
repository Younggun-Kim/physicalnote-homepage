import React from 'react';
import Input from '@/app/components/input/Input';

type PickInputAttribute = Pick<HTMLInputElement, 'name' | 'type' | 'placeholder' | 'value'>;

export interface InputProps extends PickInputAttribute {
  className?: string;

  onChange(text: string): void;
}

export default function LoginInput({ type, name, placeholder, value, onChange }: InputProps) {
  return (
    <Input
      className={`w-full max-w-[300px]`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
