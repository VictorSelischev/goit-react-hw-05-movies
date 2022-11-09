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

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orage;
  }
`;