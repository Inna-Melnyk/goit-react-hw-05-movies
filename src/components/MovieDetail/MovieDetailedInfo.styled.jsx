import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: 20px;

  @media screen and (max-width: 458px) {
    flex-direction: column;
    
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 300px;
  height: auto;
  max-height: 450px;
  @media screen and (max-width: 458px) {
    margin-bottom: 20px;
  }
`;


export const Info = styled.div`
  padding-left: 36px;
  margin: 0 0;
`;

export const Title = styled.h2`
  padding: 0;
  margin: 0 0 20px;
  font-size: 32px;
`;
export const Text = styled.p`
  padding: 0;
  margin: 0 0 20px;
  font-size: 16px;
`;

export const Subtitle = styled.h3`
  padding: 0;
  margin: 0 0 16px;
  font-size: 20px;
`;
export const BackLink = styled(Link)`
  display: inline-flex;
  gap: 8px;
  padding: 8px 16px;
  margin: 20px 0px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: black;

  background-color: orangered;
  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
  transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: white;
    transform: scale(1.02);
  }
`;



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