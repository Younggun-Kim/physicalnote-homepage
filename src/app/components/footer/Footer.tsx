import { FooterLinks } from './FooterLinks';

export const Footer = () => {
  const textSize = 'text-2xs sm:text-sm';

  return (
    <div className={'z-[100] bg-gradient'}>
      <div
        className={[
          'flex flex-col-reverse py-10 px-3 gap-4',
          'xs:px-7.5 sm:px-15 md:px-[112px] xl:px-[130] xl:flex-col',
        ].join(' ')}
      >
        <div className={'flex-1 flex flex-col items-center mr-auto'}>
          <span className="text-black text-[0.875rem] font-sans font-bold mb-2.5 w-full text-left">
            상호명 : 피지컬노트
          </span>
          <div className={`flex flex-col sm:flex-row`}>
            <div className={`flex gap-[5px]`}>
              <div className={`flex flex-col text-gray3 ${textSize} font-bold font-sans mr-1`}>
                <span>대표자명</span>
                <span>사업자등록번</span>
                <span>통신판매업신고번호</span>
              </div>
              <div className={`flex flex-col text-gray3 ${textSize} font-normal font-sans mr-4`}>
                <span>정문호</span>
                <span>648-19-02442</span>
                <span>2024-0000-1111</span>
              </div>
            </div>
            <div className="flex gap-[5px]">
              <div className={`flex flex-col text-gray3 ${textSize} font-bold font-sans mr-1`}>
                <span>전화번호</span>
                <span>이메일</span>
                <span>사업장주소</span>
              </div>
              <div className={`flex flex-col text-gray3 ${textSize} font-normal font-sans`}>
                <span>070-0000-0000</span>
                <span>tkdgjs852@naver.com</span>
                <span>서울특별시 강남구 봉은사로 469, B2층(삼성동, S-TOWER)</span>
              </div>
            </div>
          </div>
        </div>
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
