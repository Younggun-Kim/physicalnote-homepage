import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosInstance } from '@/networks/axiosInstance';
import { AxiosError } from 'axios';

interface UseContactMailProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export interface ContactForm {
  name: string;
  team: string;
  phone: string;
  email: string;
  detail: string;
}

export interface ContactResponse {
  success: boolean;
  // 필요한 응답 타입 추가
}

/**
 * 문의하기 API
 */
export const poseContact = async (dto: ContactForm) => {
  try {
    const url = `/api/contact`;
    const response = await AxiosInstance.post<ContactResponse>(url, dto);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postContactOpt = {
  mutationFn: poseContact,
  onSuccess: () => {
    toast.success('문의가 성공적으로 전송되었습니다.');
  },
  onError: (error: Error) => {
    console.error('이메일 전송 실패:', error);
    toast.error('문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
  },
} as UseMutationOptions<ContactResponse, AxiosError, ContactForm>;

export const useContactMail = () => {
  return useMutation<ContactResponse, AxiosError, ContactForm>(postContactOpt);
};
