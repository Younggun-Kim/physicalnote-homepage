import Link from 'next/link';
import styled from 'styled-components';
import { TERM_LINKS } from '@/types/nav_types';

interface Props {
  href: string;
  label: string;
}

export const FooterLink = ({ href, label }: Props) => {
  return (
    <Link href={href}>
      <StyledSpan className="text-gray2 font-medium font-sans">{label}</StyledSpan>
    </Link>
  );
};

export const FooterLinks = () => {
  return (
    <StyledDiv>
      {TERM_LINKS.map((link) => (
        <FooterLink
          key={link.href}
          href={link.href}
          label={link.label}
        />
      ))}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1921px) {
    gap: 20px;
    width: 100%;
    justify-content: end;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    gap: 20px;
    width: 100%;
    justify-content: end;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 20px;
    justify-content: start;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 20px;
    justify-content: start;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    gap: 20px;
    justify-content: start;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    gap: 20px;
    justify-content: start;
  }
`;

const StyledSpan = styled.span`
  font-size: 0.625rem;

  @media (min-width: 1921px) {
    font-size: 0.75rem;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    font-size: 0.75rem;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 0.75rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.75rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    font-size: 0.625rem;
  }
`;
