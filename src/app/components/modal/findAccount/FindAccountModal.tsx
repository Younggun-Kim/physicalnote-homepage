'use client';

import Image from 'next/image';
import FindAccountTab from '@/app/components/modal/findAccount/FindAccountTab';
import FindAccountPhoneInput from '@/app/components/modal/findAccount/FindAccountPhoneInput';
import { FindAccountAuthCode } from '@/app/components/modal/findAccount/FindAccountAuthCode';
import AuthCodeMsg from '@/app/components/modal/findAccount/FindAccountAuthMsg';
import FindIdBtn from '@/app/components/modal/findAccount/FindIdBtn';
import useFindAccountModalStore, { isTabFindId } from '@/store/modal/findAccountModalStore';
import FindIdResult from '@/app/components/modal/findAccount/FindIdResult';
import FindPwStep1Btn from '@/app/components/modal/findAccount/FindPwStep1Btn';
import FindAccountChangePw from '@/app/components/modal/findAccount/FindAccountChangePw';
import FindPwResult from '@/app/components/modal/findAccount/FindPwResult';

const FindAccountModal = () => {
  const { isOpen, tab, foundId, foundPwId, isSuccessChangePw } = useFindAccountModalStore((store) => store.state);
  const { closeModal, onChangeTab } = useFindAccountModalStore((store) => store.actions);

  return isOpen ? (
    <div className="z-[150] w-full fixed top-[50%] translate-y-[-50%]">
      <div
        className={[
          'w-full max-w-[320px] mx-auto shadow-md py-7 rounded-[20px] bg-white',
          'flex justify-center items-start',
          'sm:max-w-[570px]',
        ].join(' ')}
      >
        <div className={'w-full h-full flex flex-col justify-start items-center sm:max-w-[400px]'}>
          <div className={'w-full flex items-center px-2.5 mb-6'}>
            <span className={'flex-1 inline-block font-sans font-bold text-gray1 text-center text-lg'}>계정찾기</span>
            <button onClick={closeModal}>
              <Image
                src="/icons/x-close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className={'w-full flex items-center px-2.5 mb-7.5'}>
            <FindAccountTab
              text={'아이디 찾기'}
              isSelected={isTabFindId(tab)}
              onClick={() => onChangeTab('id')}
            />
            <FindAccountTab
              text={'비밀번호 찾기'}
              isSelected={!isTabFindId(tab)}
              onClick={() => onChangeTab('pw')}
            />
          </div>

          {!foundId && !foundPwId && (
            <div className={'w-full flex flex-col justify-start items-center gap-5 px-7.5'}>
              {/*<FindAccountNameInput />*/}
              {/*{!isTabFindId(tab) && <FindAccountEmailInput />}*/}
              <div className={'w-full flex flex-col justify-start items-start gap-2'}>
                <FindAccountPhoneInput />
                <FindAccountAuthCode />
                <AuthCodeMsg />
              </div>
              {isTabFindId(tab) && <FindIdBtn />}
              {!isTabFindId(tab) && <FindPwStep1Btn />}
            </div>
          )}

          {foundId && <FindIdResult />}
          {foundPwId && !isSuccessChangePw && <FindAccountChangePw />}
          {isSuccessChangePw && <FindPwResult />}
        </div>
      </div>
    </div>
  ) : null;
};

export default FindAccountModal;
