'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { CancelType } from '@/types/cancelType';
import { useBillingKeyStore } from '@/store';
import useSubscriptionCancelModalStore from '@/store/modal/subscriptionCancelModalStore';
import CheckWrapper from '@/app/components/modal/CheckWrapper';
import CheckBox from '../checkbox/CheckBox';
import CheckDescription from '@/app/components/modal/CheckDescription';
import useDeleteSubscription from '@/app/utils/query/payment/useDeleteSubscription';

export default function UnSubscriptionModal() {
  const [cancelType, setCancelType] = useState<CancelType | undefined>(undefined);
  const { isOpen } = useSubscriptionCancelModalStore((store) => store.state);
  const { closeModal } = useSubscriptionCancelModalStore((store) => store.actions);
  const { defaultBillingKey } = useBillingKeyStore((store) => store.state);
  const cancelMutation = useDeleteSubscription();

  const handleCancel = async () => {
    if (cancelType == undefined) {
      toast('사유를 선택해주세요.');
      return;
    }

    if (!defaultBillingKey) {
      toast('유효하지 않은 구독입니다. 관리자에게 문의해주세요.');
      return;
    }

    try {
      await cancelMutation.mutateAsync({
        customerKey: defaultBillingKey.customerKey,
        cancelReason: cancelType,
      });

      closeModal();
    } catch (e) {
      console.log(e);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 w-[100vw] h-[100vh]">
      <div
        className={[
          'flex flex-col justify-start items-start rounded-[20px] bg-white shadow-md p-7.5',
          'fixed left-[30px] right-[30px] top-[50%] translate-y-[-50%]',
          'md:left-[50%] md:right-auto md:translate-x-[-50%]',
        ].join(' ')}
      >
        <h6 className="font-sans font-bold text-black text-[16px]">구독을 취소할까요?</h6>
        <span className="font-sans font-bold text-black text-[10px] mb-6">
          취소하시면 이용하던 서비스는 더이상 사용이 불가합니다.
        </span>
        <span className="font-sans font-normal text-black text-[12px] mb-6">
          탈퇴하시는 이유를 선택해주세요. (단일선택)
        </span>
        <div className={'w-full flex flex-col justify-start items-start gap-3 mb-7.5 sm:flex-row sm:gap-5'}>
          <div className="flex-1 flex flex-col justify-start items-start gap-3">
            <CheckWrapper onClick={() => setCancelType('OTHER_SITE_BETTER')}>
              <CheckBox isChecked={cancelType == 'OTHER_SITE_BETTER'} />
              <CheckDescription text={'다른 사이트가 더 유용해요.'} />
            </CheckWrapper>
            <CheckWrapper onClick={() => setCancelType('RARELY_USED')}>
              <CheckBox isChecked={cancelType == 'RARELY_USED'} />
              <CheckDescription text={'잘 사용하지 않아요.'} />
            </CheckWrapper>
            <CheckWrapper onClick={() => setCancelType('NOT_SATISFIED')}>
              <CheckBox isChecked={cancelType == 'NOT_SATISFIED'} />
              <CheckDescription text={'사용하는데 너무 불편해요.'} />
            </CheckWrapper>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-3">
            <CheckWrapper onClick={() => setCancelType('EXPENSIVE')}>
              <CheckBox isChecked={cancelType == 'EXPENSIVE'} />
              <CheckDescription text={'구독료가 비싸요.'} />
            </CheckWrapper>
            <CheckWrapper onClick={() => setCancelType('CONTENT_INSUFFICIENT')}>
              <CheckBox isChecked={cancelType == 'CONTENT_INSUFFICIENT'} />
              <CheckDescription text={'콘텐츠가 불만이에요.'} />
            </CheckWrapper>
            <CheckWrapper onClick={() => setCancelType('OTHER')}>
              <CheckBox isChecked={cancelType == 'OTHER'} />
              <CheckDescription text={'기타'} />
            </CheckWrapper>
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-2.5">
          <button
            className={
              'rounded-[10px] border-[1px] border-tertiary py-[5px] px-[13px] font-sans font-normal text-center text-gray1 text-xs leading-relaxed tracking-tighter'
            }
            onClick={closeModal}
          >
            닫기
          </button>
          <button
            className={
              'rounded-[10px] py-[5px] px-[13px] bg-primary font-sans font-normal text-center text-white text-xs leading-relaxed tracking-tighter'
            }
            onClick={handleCancel}
          >
            구독취소
          </button>
        </div>
      </div>
    </div>
  );
}
