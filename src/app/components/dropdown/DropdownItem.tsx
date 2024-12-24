import { cls } from '@/utils';
import { DropDownOption } from '@/app/components/dropdown/Dropdown';

interface Props<T> {
  option: DropDownOption<T>;
  isSelected: boolean;
  onClick: (option: DropDownOption<T>) => void;
}

export const DropdownItem = <T,>({ option, isSelected, onClick }: Props<T>) => {
  const fontWeight = isSelected ? 'font-bold' : 'font-normal';
  const bgColor = isSelected ? 'bg-secondary' : 'bg-white';

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();

    onClick(option);
  };

  return (
    <div
      className={cls('py-2.5 text-center hover:bg-tertiary', bgColor)}
      onClick={handleClick}
    >
      <span className={cls('font-sans text-3.5 text-gray0 leading-[1.6] tracking-tighter', fontWeight)}>
        {option.label}
      </span>
    </div>
  );
};
