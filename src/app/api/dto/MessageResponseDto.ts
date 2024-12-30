export default interface MessageResponseDto {
  message: string;
  status: boolean;
}

/** 타입 가드 함수 */
export function isMessageResponse(data: any): data is MessageResponseDto {
  return (
    typeof data === 'object' &&
    data !== null &&
    'message' in data &&
    typeof data.message === 'string' &&
    'status' in data &&
    typeof data.status === 'boolean'
  );
}
