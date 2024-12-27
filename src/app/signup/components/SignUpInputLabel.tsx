interface Props {
  text: string;
}

export const SignUpInputLabel = ({ text }: Props) => {
  return (
    <span className="justify-self-start self-center text-gray2 text-3.5 font-sans font-normal leading-[1.6] tracking-tighter no-calt">
      {text}
    </span>
  );
};

export default SignUpInputLabel;
