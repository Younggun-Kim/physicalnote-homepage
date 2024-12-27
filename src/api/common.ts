import { instance } from '@/api/base';
import AddressHierarchyResponseDto from '@/api/dto/common/addressHierarchyResponse';
import UploadImageRequestDto from '@/api/dto/common/uploadImageRequestDto';
import { PhoneVerifyRequestDto } from '@/api/dto';

const Auth = {
  /**
   * 휴대폰 번호 인증 요청
   * @param phoneNumber
   */
  async postPhoneSend(phoneNumber: string) {
    try {
      const url = `auth/phone/send?phoneNumber=${phoneNumber}`;
      return await instance.post(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 휴대폰 인증번호 확인
   * @param phoneNumber
   * @param authCode
   */ async postPhoneVerify({ phoneNumber, authCode }: PhoneVerifyRequestDto) {
    try {
      const url = `auth/phone/verify?phoneNumber=${phoneNumber}&authCode=${authCode}`;
      const result = await instance.post(url);
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Auth;
