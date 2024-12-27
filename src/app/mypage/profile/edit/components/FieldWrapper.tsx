interface Props {
  className?: string;
  isJustifyCenter?: boolean;
  children?: React.ReactNode;
}
export const FieldWrapper = ({ className, isJustifyCenter = false, children }: Props) => {
  return (
    <div
      className={
        'w-full flex flex-col justify-start items-start gap-1' +
        ' sm:flex-row sm:items-center sm:gap-6 md' +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
};

export default FieldWrapper;
