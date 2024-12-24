import { instanceWithToken } from '@/api/base';
import UserDetailResponseDto from './dto/user/detail/userDetailResponseDto';

const Auth = {
  /**
   * 유저 정보 조회 API
   */
  async getUser() {
    try {
      const url = `admin/coach`;
      const result = await instanceWithToken.get<UserDetailResponseDto>(url);
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Auth;
