import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 10px;
  @media screen and (min-width: 420px) {
    font-size: 16px;
  }
  font-weight: 700;
  color: white;

  &.active {
    color: black;
  }
`;
