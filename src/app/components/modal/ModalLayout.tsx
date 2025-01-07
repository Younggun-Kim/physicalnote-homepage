interface Props {
  onClick: () => void;
  children: React.ReactNode;
}
const ModalLayout = ({ onClick, children }: Props) => {
  return (
    <div className={'fixed inset-0 flex items-center justify-center z-[100]'}>
      <div
        className="absolute inset-0 bg-black opacity-40 -z-10"
        onClick={() => onClick()}
      />
      {children}
    </div>
  );
};

export default ModalLayout;
