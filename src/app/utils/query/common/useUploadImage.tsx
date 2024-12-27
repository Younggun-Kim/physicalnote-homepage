import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import UploadImageRequestDto from '@/api/dto/common/uploadImageRequestDto';
import UploadImageResponseDto from '@/api/dto/common/uploadImageResponseDto';
import { AxiosInstance } from '@/app/utils/service/axiosInstance';

/**
 * 이미지 임시 저장 API
 */
export const postUploadImage = async ({ dir, file }: UploadImageRequestDto) => {
  try {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const url = `upload/${dir}`;
    const response = await AxiosInstance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useUploadImage = () => {
  return useMutation<UploadImageResponseDto, AxiosError, UploadImageRequestDto>({
    mutationFn: postUploadImage,
    onSuccess: (data) => {
      console.log('이미지 업로드 성공:', data.url);
    },
    onError: (error) => {
      console.error('이미지 업로드 실패:', error);
    },
  });
};
