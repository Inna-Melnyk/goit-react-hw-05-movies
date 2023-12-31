import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;



export const Logo = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0;

  > span{
    @media screen and (max-width: 458px) {
    display: none;
}
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
