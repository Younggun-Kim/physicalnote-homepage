import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';
import { PhoneVerifyResponseDto } from '@/networks/dto/common';

export async function POST(req: NextRequest): Promise<NextResponse<PhoneVerifyResponseDto | ApiError>> {
  try {
    const { phoneNumber, authCode } = await req.json();
    const url = `/auth/phone/verify?phoneNumber=${phoneNumber}&authCode=${authCode}`;
    const response = await apiClient.post<PhoneVerifyResponseDto>(url, null);

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
