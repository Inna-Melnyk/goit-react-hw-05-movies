import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  gap:22px;
  padding: 0;
  padding-top: 20px;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  max-width: 220px;
  border: none;
  border-radius: 8px;
  padding: 0;
  margin: 0;
  background-color: #ebbfaf;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);
`;
