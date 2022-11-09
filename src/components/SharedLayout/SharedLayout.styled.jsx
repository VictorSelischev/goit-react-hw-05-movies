import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const Header = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Navigation = styled.nav`
  display: flex;

`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #08213d;
  font-weight: 500;

  &.active {
    color: #0970e5;
  }

  :hover {
    text-decoration: underline;
  }
`;