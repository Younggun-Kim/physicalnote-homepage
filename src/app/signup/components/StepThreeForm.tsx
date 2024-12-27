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
    <div className="flex-1 flex flex-col items-center">
      <div className="flex-1 flex justify-center items-center mb-6.25">
        <Image
          src={'/images/signUpComplete.png'}
          alt={'회원가입 완료'}
          width={328}
          height={353}
        />
      </div>
      <div className="mb-6">
        <EnabledBtn
          text="로그인"
          containerClassName="py-3 w-80"
          isEnabled={true}
          onClick={handeMoveLogin}
        />
        <Button
          text="메인화면"
          containerClassName="shadow-md mt-6 border-[1px] border-secondary"
          className="w-80 py-3 bg-white"
          onClick={handleMoveHome}
        />
      </div>
    </div>
  );
};

export default StepThreeForm;
