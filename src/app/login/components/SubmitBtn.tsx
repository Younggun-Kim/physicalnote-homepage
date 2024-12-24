import useLoginValidation from '@/hooks/useLoginValidation';
import Api from '@/api/login';
import { useAppStore } from '@/store';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

/** 로그인 하기 버튼 */
export function SubmitBtn() {
  const router = useRouter();
  const validResult = useLoginValidation();
  const { onLogin, onLogout } = useAppStore((store) => store.actions);

  const handleSubmit = async () => {
    try {
      const dto = validResult();
      if (!dto) {
        return;
      }
      await Api.postLogin(dto)
        .then((result) => {
          if (result.token) {
            onLogin(result.token, result.name);
            router.push('/');
          } else {
            onLogout();
          }
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            toast('아이디 또는 비밀번호가 일치하지 않습니다.');
          } else {
            toast(err.message || '로그인 중 오류가 발생했습니다.');
          }
        });
    } catch (error) {}
  };

  return (
    <div className={`rounded-full overflow-hidden flex justify-center items-center shrink-0 shadow-md bg-secondary`}>
      <button
        className={'py-[9.5px] text-gray1 text-lg font-sans font-bold'}
        onClick={handleSubmit}
      >
        로그인
      </button>
    </div>
  );
}

export default SubmitBtn;
