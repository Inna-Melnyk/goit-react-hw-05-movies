import styled from '@emotion/styled';
import {Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  padding-bottom: 20px;
  gap: 16px;
  border-bottom: 1px solid black; 
  
  @media screen and (max-width: 458px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
export const Item = styled.li`
  min-width: 200px;
  text-align: center;
`;


export const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  text-decoration: none;
  min-width: 200px;
  color: black;
  font-weight: 500;
  padding: 13px;
  background-color: #ebbfaf;
  border-radius: 8px;
  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: orangered;
    transform: scale(1.02);
  }
`;