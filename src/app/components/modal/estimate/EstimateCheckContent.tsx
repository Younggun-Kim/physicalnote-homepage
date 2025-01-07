import RadioBtn from '@/app/components/checkbox/RadioBtn';

interface Props {
  text: string;
  isOn: boolean;
  onClick: () => void;
}

const EstimateCheckContent = ({ text, isOn, onClick }: Props) => {
  return (
    <div
      className="flex items-center gap-2.5"
      onClick={() => onClick()}
    >
      <RadioBtn isOn={isOn} />
      <span className="font-sant font-normal text-gray1 text-base">{text}</span>
    </div>
  );
};

export default EstimateCheckContent;
