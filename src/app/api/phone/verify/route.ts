import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';
import MessageResponseDto from '@/app/api/dto/MessageResponseDto';

export async function POST(req: NextRequest): Promise<NextResponse<MessageResponseDto | ApiError>> {
  try {
    const { phoneNumber } = await req.json();
    const response = await apiClient.post<MessageResponseDto>(`/auth/phone/send?phoneNumber=${phoneNumber}`, null);

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