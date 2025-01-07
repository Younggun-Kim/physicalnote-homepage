import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import EstimateDownloadRequestDto from '@/networks/query/common/estimate/estimateDownloadRequestDto';
import { toast } from 'react-toastify';

import fileDownload from 'js-file-download';
import { RawAxiosResponseHeaders } from 'axios';

export const postEstimateDownload = async (dto: EstimateDownloadRequestDto) => {
  try {
    const url = `quotation/download`;
    const response = await AxiosInstance.post(url, dto, {
      responseType: 'blob',
    });

    const contentDisposition = response.headers['content-disposition'];
    const fileName = contentDisposition
      ? decodeURIComponent(contentDisposition.split('filename=')[1].replace(/['"]/g, ''))
      : 'download.xlsx';

    console.log(response.headers as RawAxiosResponseHeaders);

    fileDownload(response.data, fileName);

    return response.status == 200;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postEstimateDownloadOpt = {
  mutationFn: postEstimateDownload,
  onError: (error) => {
    const msg = error.response?.data?.message;
    msg && toast(msg);
  },
} as UseMutationOptions<boolean, ErrorResponseType, EstimateDownloadRequestDto>;

const useEstimateDownload = () => {
  return useMutation<boolean, ErrorResponseType, EstimateDownloadRequestDto>({
    ...postEstimateDownloadOpt,
  });
};

export default useEstimateDownload;
