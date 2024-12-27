import SignUpStep from '@/app/signup/components/SignUpStep';

interface Props {
  currentStep: number;
  maxStep: number;
}

export const SignUpSteps = ({ currentStep, maxStep }: Props) => {
  return (
    <div className="relative w-full flex items-center gap-0 justify-between sm:max-w-[272px]">
      <div className="w-full absolute h-0 border-t-2 border-dashed border-secondary z-0"></div>
      <div className="w-full absolute h-0 border-t-2 border-dashed border-secondary z-0"></div>
      {Array.from({ length: maxStep }, (_, index) => (
        <SignUpStep
          key={index + 1}
          text={(index + 1).toString()}
          isSelected={currentStep >= index + 1}
        />
      ))}
    </div>
  );
};

export default SignUpSteps;
