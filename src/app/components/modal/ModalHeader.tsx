import Image from 'next/image';

interface Props {
  text: string;
  onClose: () => void;
}

const ModalHeader = ({ text, onClose }: Props) => {
  return (
    <div className="w-full flex justify-start items-center gap-10 md:flex-col-reverse md:gap-0">
      <span
        className={['font-sans font-bold text-xl text-gray1 tracking-tighter', 'md:text-2xl md:self-start'].join(' ')}
      >
        {text}
      </span>
      <button
        onClick={onClose}
        className={'md:self-end'}
      >
        <Image
          src="/icons/x-close.svg"
          alt={'모달 닫기'}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default ModalHeader;
