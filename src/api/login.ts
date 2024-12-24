'use client';

import { instance } from '@/api/base';
import { LoginRequestDto, LoginResponseDto, TeamValidateRequestDto, TeamValidateResponseDto } from '@/api/dto';
import SignUpRequestDto from '@/api/dto/login/signUp/signUpRequestDto';
import { SignUpResponseDto } from '@/api/dto/login/signUp/signUpResponseDto';

const Auth = {
  /**
   * 회원가입 API
   */
  async postSignUp(dto: SignUpRequestDto) {
    try {
      const url = `login/signin/coach`;
      const result = await instance.post<SignUpResponseDto>(url, dto);
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 팀 중복 확인 API
   */
  async getTeamValidate({ sidoCode, sggCode, dongCode, teamAgeGroup, teamName }: TeamValidateRequestDto) {
    try {
      const url = `team/validate?sidoCode=${sidoCode}&sggCode=${sggCode}&dongCode=${dongCode}&teamAgeGroup=${teamAgeGroup.toUpperCase()}&teamName=${teamName}`;
      const result = await instance.get<TeamValidateResponseDto>(url);
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
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
