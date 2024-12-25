import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '@/app/api/apiClient';
import { ApiError } from '@/app/api/login/route';
import AddressHierarchyResponseDto from '@/api/dto/common/addressHierarchyResponse';

export async function GET(req: NextRequest): Promise<NextResponse<AddressHierarchyResponseDto | ApiError>> {
  try {
    const { sggCode } = await req.json();
    const response = await apiClient.get<AddressHierarchyResponseDto>(`/emd?sggCode=${sggCode}`);

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
