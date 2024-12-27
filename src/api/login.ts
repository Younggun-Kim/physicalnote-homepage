'use client';

import { instance } from '@/api/base';
import { LoginRequestDto, LoginResponseDto } from '@/api/dto';

const Auth = {
  /**
   * 로그인 API
   */
  async postLogin(dto: LoginRequestDto) {
    try {
      const url = `login/admin`;
      const result = await instance.post<LoginResponseDto>(url, dto);
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Auth;
