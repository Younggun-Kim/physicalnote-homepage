interface Props {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const FindAccountTab = ({ text, isSelected, onClick }: Props) => {
  const borderWidth = isSelected ? 'border-b-[3px]' : 'border-b-[1px]';
  const borderColor = isSelected ? 'border-primary' : 'border-secondary';
  return (
    <button
      className={`flex-1 py-2.5 font-sans font-bold text-gray1 text-sm tracking-tighter ${borderWidth} ${borderColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FindAccountTab;
