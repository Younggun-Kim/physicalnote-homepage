import { instanceWithToken } from '@/api/base';
import CoachInfoResponseDto from '@/api/dto/coach/info/CoachInfoResponseDto';
import CoachVerifyPwResponseDto from '@/api/dto/coach/verify/CoachVerifyPwResponseDto';
import CoachVerifyPwRequestDto from '@/api/dto/coach/verify/CoachVerifyPwRequestDto';
import CoachPutRequestDto from '@/api/dto/coach/put/CoachPutRequestDto';

const Auth = {
  /**
   * 코치 정보 API
   */
  async getCoachInfo() {
    try {
      const url = `admin/coach/info`;
      const result = await instanceWithToken.get<CoachInfoResponseDto>(url);
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 비밀번호 확인 API
   */
  async postVerifyPw(dto: CoachVerifyPwRequestDto) {
    try {
      const url = `admin/coach/verify/password`;
      const result = await instanceWithToken.post<CoachVerifyPwResponseDto>(url, dto);
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 코치 정보 수정 API
   */
  async putCoachInfo(dto: CoachPutRequestDto) {
    try {
      const url = `admin/coach/info`;
      return await instanceWithToken.put<CoachInfoResponseDto>(url, dto);
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Auth;
