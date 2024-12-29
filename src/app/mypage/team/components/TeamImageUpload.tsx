import Image from 'next/image';
import { ChangeEvent, useRef } from 'react';
import { useUploadImage } from '@/networks/query/common/useUploadImage';

interface Props {
  onSuccess: (url: string) => void;
  onFailure: () => void;
}

export const TeamImageUpload = ({ onSuccess, onFailure }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadImageMutation = useUploadImage();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async (file: File) => {
    try {
      const responseData = await uploadImageMutation.mutateAsync({
        dir: 'profile',
        file: file,
      });
      if (responseData.uploaded && responseData.url.length >= 1) {
        onSuccess(responseData.url[0]);
      } else {
        onFailure();
      }
    } catch (error) {
      onFailure();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 파일 크기 체크 (예: 5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기는 5MB 이하여야 합니다.');
      return;
    }

    // 이미지 파일 타입 체크
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    await handleUpload(file);
  };

  return (
    <div
      className="w-11 h-11 flex-shrink-0 flex justify-center items-center rounded-full overflow-hidden shadow-md"
      onClick={handleClick}
    >
      <Image
        src="/icons/photograph.svg"
        alt=""
        width="24"
        height="24"
      />
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default TeamImageUpload;
