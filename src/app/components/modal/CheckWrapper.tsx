interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export const CheckWrapper = ({ onClick, children }: Props) => {
  return (
    <div
      className="flex items-center w-full"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CheckWrapper;
