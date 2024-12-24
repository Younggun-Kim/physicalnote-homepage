import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import CommonAPI from '@/api/common';
import UploadImageRequestDto from '@/api/dto/common/uploadImageRequestDto';
import UploadImageResponseDto from '@/api/dto/common/uploadImageResponseDto';

/**
 * 이미지 업로드
 * */
export const useUploadImage = () => {
  return useMutation<UploadImageResponseDto, AxiosError, UploadImageRequestDto>({
    mutationFn: CommonAPI.postUploadImage,
    onSuccess: (data) => {
      console.log('이미지 업로드 성공:', data.url);
    },
    onError: (error) => {
      console.error('이미지 업로드 실패:', error);
    },
  });
};
