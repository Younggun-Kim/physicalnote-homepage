import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';

export interface CoachVerifyPwRequestDto {
  password: string;
}

export interface CoachVerifyPwResponseDto {
  status: boolean;
  userLoginId: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<CoachVerifyPwResponseDto | ApiError>> {
  try {
    const requestData = await request.json();
    const response = await apiClient.post<CoachVerifyPwResponseDto>('/admin/coach/verify/password', requestData);

    if (!response.data) {
      throw new Error(response.error ?? '서버 에러');
    }

    return NextResponse.json(response.data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: `${error}}` }, { status: 500 });
  }
}
