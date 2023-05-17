import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.span`
  font-size: 12px;
  @media screen and (min-width: 420px) {
    font-size: 17px;
  }
  font-weight: 700;
`;
