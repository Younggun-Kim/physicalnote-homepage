import { NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';

export interface CoachInfoResponseDto {
  dong: string;
  gu: string;
  loginId: string;
  memberCnt: number;
  name: string;
  si: string;
  staffPosition: string;
  teamAgeGroup: string;
  teamName: string;
  teamProfile: string;
}

export async function GET(): Promise<NextResponse<CoachInfoResponseDto | ApiError>> {
  try {
    const response = await apiClient.get<CoachInfoResponseDto>('/admin/coach/info');

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
    console.error(error);
    // TODO: 로그인 화면 리다이렉트
    // if (error instanceof ApiResponse) {
    // }
    return NextResponse.json({ error: `${error}}` }, { status: 500 });
  }
}
