interface Props {
  text: string;
}

export const ErrorLabel = ({ text }: Props) => {
  return (
    <div className="w-80">
      <span className="w-full px-5 text-left font-sans font-normal text-red text-3.5 leading-[1.6] tracking-tighter">
        {text}
      </span>
    </div>
  );
};
export default ErrorLabel;
