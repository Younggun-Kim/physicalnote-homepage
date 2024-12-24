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
  /**
   * 시/도 목록 조회
   */
  async getSiDo() {
    try {
      const url = `sido`;
      return await instance.get<AddressHierarchyResponseDto[]>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 시/군/구 목록 조회
   * @param siDoCode
   */
  async getSiGunGu(siDoCode: string) {
    try {
      const url = `sgg?sidoCode=${siDoCode}`;
      return await instance.get<AddressHierarchyResponseDto[]>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 읍/면/동 목록 조회
   * @param sggCode
   */
  async getEmd(sggCode: string) {
    try {
      const url = `emd?sggCode=${sggCode}`;
      return await instance.get<AddressHierarchyResponseDto[]>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 이미지 임시 저장 API
   */
  async postUploadImage({ dir, file }: UploadImageRequestDto) {
    try {
      const formData = new FormData();
      formData.append('file', file, file.name);

      const url = `upload/${dir}`;
      const response = await instance.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Auth;
