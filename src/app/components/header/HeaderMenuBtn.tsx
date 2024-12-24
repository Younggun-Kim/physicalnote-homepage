import Image from 'next/image';
import { useAppStore } from '@/store';

export default function HeaderMenuBtn() {
  const { changeMenuVisible } = useAppStore((store) => store.actions);
  const handleClick = () => {
    changeMenuVisible();
  };
  return (
    <button onClick={handleClick}>
      <Image
        src="/icons/menu-01.svg"
        alt="메뉴"
        width={24}
        height={24}
      />
    </button>
  );
}
