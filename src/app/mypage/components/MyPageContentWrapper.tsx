import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const MyPageContentWrapper = ({ children }: Props) => {
  return (
    <div
      className="
      mt-8
      sm:mt-40
      md:mt-48
    "
    >
      {children}
    </div>
  );
};

export default MyPageContentWrapper;
