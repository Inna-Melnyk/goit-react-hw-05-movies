import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
list-style: none;
padding:0;
margin:0;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;
export const Item = styled.li`
  max-width: 300px;
  border: none;
  border-radius: 8px;
  padding: 0;
  margin: 0;
  background-color: #ebbfaf;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);


  &:hover {
    transform: scale(1.02);
  }
`;


export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: orangered;
  }
`;

export const Image = styled.img`
  display: block;
    height: 420px;
    max-width: 100%;

`;


export const Title = styled.h3`
  font-size: 14px;
  line-height: 1.30;
  padding: 12px;
  margin:0;
`;
