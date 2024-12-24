import { LoginRequestDto } from '@/api/dto';
import { useLoginStore } from '@/store';
import { toast } from 'react-toastify';

export const useLoginValidation = () => {
  const { loginId, password } = useLoginStore((state) => state.state);

  return () => {
    if (!loginId.isValid()) {
      toast('이메일을 확인해주세요.');
      return undefined;
    }

    if (!password.isValid()) {
      toast('비밀번호를 확인해주세요.');
      return undefined;
    }

    return {
      loginId: loginId.getValue(),
      password: password.getValue(),
      type: 'IDPW',
    } as LoginRequestDto;
  };
};

export default useLoginValidation;
