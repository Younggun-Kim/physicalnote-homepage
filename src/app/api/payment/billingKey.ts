import { NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';
import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';

export async function GET(): Promise<NextResponse<GetBillingKeysResponseDto[] | ApiError>> {
  try {
    const response = await apiClient.get<GetBillingKeysResponseDto[]>('/admin/v1/subscriptions/billing-keys');

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
