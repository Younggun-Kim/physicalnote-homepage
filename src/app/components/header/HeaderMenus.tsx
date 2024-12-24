import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import HEADER_LINKS from '@/types/nav_types';
import NavLink from '@/app/components/header/HeaderNavLink';

export default function HeaderMenus() {
  const pathname = usePathname();

  return (
    <StyledNav>
      {HEADER_LINKS.map((item) => {
        const isSelected = pathname === item.href;
        return (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isSelected={isSelected}
          />
        );
      })}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 30px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 44px;
  }
`;
