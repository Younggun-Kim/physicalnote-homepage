import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';
import UserDetailResponseDto from '@/networks/dto/user/detail/userDetailResponseDto';

export async function GET(): Promise<NextResponse<UserDetailResponseDto | ApiError>> {
  try {
    const response = await apiClient.get<UserDetailResponseDto>('/admin/coach');

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
    return NextResponse.json({ error: `${error}}` }, { status: 500 });
  }
}

/**
 * 코치 정보 수정
 */
export async function PUT(req: NextRequest): Promise<NextResponse<UserDetailResponseDto | ApiError>> {
  try {
    const data = req.json();
    const response = await apiClient.put<UserDetailResponseDto>('/admin/coach', data);

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
    return NextResponse.json({ error: `${error}}` }, { status: 500 });
  }
}
