interface Props {
  text: string;
}

export const FieldTitle = ({ text }: Props) => {
  return (
    <span
      className={
        'font-sans font-normal text-gray2 text-xs leading-relaxed tracking-tighter' + ' sm:min-w-14 sm:text-sm'
      }
    >
      {text}
    </span>
  );
};

export default FieldTitle;
