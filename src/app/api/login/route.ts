export interface LoginRequest {
  loginId: string;
  password: string;
  type: string;
}

export interface LoginResponse {
  token: string;
  name: string;
}

export interface ApiError {
  error: string;
}

import { NextRequest, NextResponse } from 'next/server';
import { deleteCookie, setCookie } from 'cookies-next';

export async function POST(request: NextRequest): Promise<NextResponse<LoginResponse | ApiError>> {
  console.log('POST login');
  try {
    const loginData: LoginRequest = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();
    console.log('API response', data);

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json({ error: '아이디 또는 비밀번호가 일치하지 않습니다.' }, { status: 401 });
      }
      throw new Error('로그인 처리 중 오류가 발생했습니다.');
    }

    setCookie('token', data.token);
    return NextResponse.json({
      token: data.token,
      name: data.name,
    });
  } catch (error) {
    console.error('Login error:', error);
    deleteCookie('token');
    return NextResponse.json({ error: '로그인 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
