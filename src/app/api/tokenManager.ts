// utils/tokenManager.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const TOKEN_NAME = 'auth_token';

interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  path?: string;
  maxAge?: number; // 초 단위
}

export class TokenManager {
  private static defaultOptions: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 24 * 60 * 60, // 24시간
  };

  /**
   * 쿠키에서 토큰을 가져옵니다.
   */
  static async getToken(): Promise<string | undefined> {
    const cookieStore = await cookies();
    return cookieStore.get(TOKEN_NAME)?.value;
  }

  /**
   * Token 저장
   */
  static async setToken(token: string) {
    const cookieStore = await cookies();
    cookieStore.set(TOKEN_NAME, token, { secure: true });
  }

  /**
   * 토큰이 있는지 확인합니다.
   */
  static async hasToken(): Promise<boolean> {
    const token = await this.getToken();
    return !!token;
  }

  /**
   * 토큰을 삭제합니다.
   */
  static removeToken(response: NextResponse): NextResponse {
    response.cookies.delete(TOKEN_NAME);
    return response;
  }
}
