interface Props {
  text: string;
}

const EstimateFieldName = ({ text }: Props) => {
  return <span className="font-sant font-medium text-black text-sm mb-3">{text}</span>;
};

export default EstimateFieldName;
