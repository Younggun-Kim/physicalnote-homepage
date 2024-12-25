import { Button } from './Button';

interface Props {
  containerClassName?: string;
  className?: string;
  text: string;
  isEnabled: boolean;
  onClick: () => void;
}

export const EnabledBtn = ({ containerClassName = '', className = '', text, isEnabled, onClick }: Props) => {
  const bgColor = isEnabled ? 'bg-secondary' : 'bg-gray3';
  const handleClick = () => {
    if (!isEnabled) {
      return;
    }
    onClick();
  };
  return (
    <Button
      containerClassName={`${containerClassName} ${bgColor}`}
      className={className}
      text={text}
      onClick={handleClick}
    />
  );
};
