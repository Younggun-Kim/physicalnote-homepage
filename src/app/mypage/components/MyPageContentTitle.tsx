import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const MyPageContentTitle = ({ children }: Props) => {
  return (
    <h6
      className="
      text-gray0
      font-sans
      text-sm
      font-bold
      tracking-tighter
      mb-2
      sm:text-base
      md:text-xl
    "
    >
      {children}
    </h6>
  );
};

export default MyPageContentTitle;
