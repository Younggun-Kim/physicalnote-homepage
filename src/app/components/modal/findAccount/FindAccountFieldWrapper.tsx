interface Props {
  children?: React.ReactNode;
}

const FindAccountFieldWrapper = ({ children }: Props) => {
  return <div className={'w-full flex flex-col justify-start items-start gap-2.5'}>{children}</div>;
};

export default FindAccountFieldWrapper;
