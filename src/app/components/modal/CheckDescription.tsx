interface Props {
  text: string;
}

export const CheckDescription = ({ text }: Props) => {
  return <span className={'font-sans font-normal text-xs text-black ml-[8px] whitespace-nowrap'}>{text}</span>;
};

export default CheckDescription;
