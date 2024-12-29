import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';
import AddressHierarchyResponseDto from '@/networks/dto/common/addressHierarchyResponse';

export async function GET(req: NextRequest): Promise<NextResponse<AddressHierarchyResponseDto | ApiError>> {
  try {
    const { siDoCode } = await req.json();
    const response = await apiClient.get<AddressHierarchyResponseDto>(`/sgg?sidoCode=${siDoCode}`);

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
