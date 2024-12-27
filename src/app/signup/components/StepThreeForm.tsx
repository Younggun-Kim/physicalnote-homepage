import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import Button from '@/app/components/Button';

export const StepThreeForm = () => {
  const router = useRouter();

  const handeMoveLogin = () => {
    router.push('/login');
  };

  const handleMoveHome = () => {
    router.push('/');
  };
  return (
    <div className="flex-1 flex flex-col items-center pt-7.5">
      <Image
        className={'mb-10'}
        src={'/images/pana.svg'}
        alt={'회원가입 완료'}
        width={234}
        height={256}
      />
      <p className={'text-center font-sans font-medium text-gray1 text-base xs:text-lg mb-13.5'}>
        <span>정상적으로 회원가입 완료되었습니다.</span>
        <br />
        <span>로그인 후 이용하세요.</span>
      </p>
      <div className="w-full xs:max-w-[280px] mb-6">
        <EnabledBtn
          text="로그인"
          containerClassName="w-full h-10 xs:h-12"
          className={'w-full h-full !text-base xs:!text-lg '}
          isEnabled={true}
          onClick={handeMoveLogin}
        />
        <Button
          text="메인화면"
          containerClassName="shadow-md mt-6 border-[1px] border-secondary h-10 xs:h-12"
          className="w-full h-full bg-white !text-base xs:!text-lg "
          onClick={handleMoveHome}
        />
      </div>
    </div>
  );
};

export default StepThreeForm;
