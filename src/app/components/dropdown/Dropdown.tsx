'use client';
import Image from 'next/image';
import Button from '../Button';
import { DropdownItem } from '@/app/components/dropdown/DropdownItem';
import React from 'react';

interface Props<T> {
  className?: string;
  placeholder: string;
  options: DropDownOption<T>[];
  selectedOption?: DropDownOption<T>;
  onSelect?: (selected: DropDownOption<T>) => void;
  hasRightBtn?: boolean;
  rightBtnText?: string;
  onRightClick?: () => void;
}

export interface DropDownOption<T> {
  label: string;
  value: T;
}

export const Dropdown = <T,>({
  className = '',
  placeholder,
  options,
  selectedOption,
  onSelect,
  hasRightBtn,
  rightBtnText = '',
  onRightClick,
}: Props<T>) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const hasSelected = () => {
    return selectedOption != null;
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = (option: DropDownOption<T>) => {
    handleClose();
    onSelect && onSelect(option);
  };

  const icon = isOpen ? '/icons/chevron-up.svg' : '/icons/chevron-down.svg';

  return (
    <div className={`dropdown relative w-full rounded-full shadow-md h-10 py-0 px-5 md:h-12 ${className}`}>
      <div className="w-full h-full flex justify-start items-center">
        <div
          className="w-full flex justify-start items-center"
          onClick={handleToggle}
        >
          <div className="flex-1 name text-sm text-gray1 font-sans font-normal sm:text-base">
            {hasSelected() ? selectedOption?.label : placeholder}
          </div>
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            onClick={handleToggle}
          />
        </div>
        {hasRightBtn && (
          <Button
            containerClassName="translate-x-[15px]"
            className="py-[5] px-[8.5] bg-tertiary flex-shrink-0 !text-[0.75rem] !leading-[1.6]"
            text={rightBtnText}
            onClick={onRightClick}
          />
        )}
      </div>
      {isOpen && (
        <div className="w-full max-h-60 overflow-y-scroll absolute left-0 top-16 rounded-[10px] shadow-md z-50 bg-white hover:cursor-pointer">
          {options.map((option) => (
            <DropdownItem<T>
              key={option.label}
              option={option}
              isSelected={option.value == selectedOption?.value}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
