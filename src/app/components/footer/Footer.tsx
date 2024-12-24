'use client';

import styled from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';
import { usePathname } from 'next/navigation';
import FooterContainer from '@/app/components/footer/FooterContainer';
import FooterWrapper from '@/app/components/footer/FooterWrapper';
import { FooterLinks } from './FooterLinks';

export const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isMobile = useMediaQuery('(max-width: 425px)');
  const direction = isMobile ? 'flex-col' : '';
  const textSize = isMobile ? 'text-[10px]' : 'text-[12px]';
  return (
    <StyledFooter $isHome={isHome}>
      <FooterContainer>
        <FooterWrapper>
          <span className="text-black text-[0.875rem] font-sans font-bold mb-2.5">상호명 : 피지컬노트</span>
          <div className={`flex ${direction}`}>
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
        </FooterWrapper>
        <FooterLinks />
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

export const StyledFooter = styled.footer<{ $isHome: boolean }>`
  z-index: 100;
  background: ${(props) =>
    props.$isHome
      ? `linear-gradient(
          180deg,
          rgba(222, 235, 200, 0) 0%,
          rgba(222, 235, 200, 0.3) 31.5%,
          rgba(222, 235, 200, 0.7) 100%
        )`
      : 'none'};
`;
