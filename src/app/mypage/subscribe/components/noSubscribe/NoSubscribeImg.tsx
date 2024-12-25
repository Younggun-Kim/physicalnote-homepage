import Image from 'next/image';

export const NoSubscribeImg = () => {
  return (
    <div className="relative w-[200px] h-[131px] md:w-[344px] md:h-[225px] mb-[22px]">
      <Image
        src="/images/no_subscribe.svg"
        alt="No subscription"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
};

export default NoSubscribeImg;
