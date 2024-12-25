import Button from './Button';

interface Props {
  className?: string;
  containerClassName?: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectableBtn = ({ containerClassName = '', className = '', text, isSelected, onClick }: Props) => {
  const bgColor = isSelected ? 'bg-secondary' : 'bg-white';
  const handleClick = () => {
    onClick();
  };
  return (
    <Button
      containerClassName={`${bgColor} ${containerClassName}`}
      className={`py-3 ${className}`}
      text={text}
      onClick={handleClick}
    />
  );
};

export default SelectableBtn;
