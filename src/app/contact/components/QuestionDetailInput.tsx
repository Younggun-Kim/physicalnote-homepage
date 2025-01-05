import React from 'react';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export const QuestionDetailInput = ({ value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };
  return (
    <FieldWrapper>
      <FieldTitle text={'문의'} />
      <textarea
        className={[
          `w-full max-w-[300px] h-[120px] rounded-[20px] py-4 px-5`,
          'shadow-md',
          'font-sans font-normal text-xs text-black leading-tight tracking-tighter',
          'sm:max-w-[400px] sm:h-[150px] focus:none outline-none',
        ].join(' ')}
        name={'detail'}
        maxLength={100}
        placeholder={'문의 내용을 입력해주세요. (100자 이내)'}
        value={value}
        onChange={handleChange}
      />
    </FieldWrapper>
  );
};
