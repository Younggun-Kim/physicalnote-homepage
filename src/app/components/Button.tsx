export interface ButtonProps {
  text: string;
  className: string;
  containerClassName?: string;
  onClick?: () => void;
}

export const Button = ({ text, containerClassName = '', className, onClick }: ButtonProps) => {
  return (
    <div className={`rounded-full overflow-hidden flex justify-center items-center shrink-0 ${containerClassName}`}>
      <button
        className={'text-gray1 text-xl font-sans font-bold ' + className}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
