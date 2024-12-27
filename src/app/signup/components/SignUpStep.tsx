import { cls } from '@/utils';

interface Props {
  text: string;
  isSelected: boolean;
}

export const SignUpStep = ({ text, isSelected }: Props) => {
  const getBgColor = () => {
    return isSelected ? 'bg-secondary' : 'bg-white';
  };

  return (
    <div
      className={cls(
        'rounded-full w-10 h-10 flex items-center justify-center z-10 border-secondary border-2',
        'xs:w-11.5 xs:h-11.5',
        getBgColor(),
      )}
    >
      <span className="text-base text-gray1 font-sans font-bold leading-[1.6]">{text}</span>
    </div>
  );
};

export default SignUpStep;
