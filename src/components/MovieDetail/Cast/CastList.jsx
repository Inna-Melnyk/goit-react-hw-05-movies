// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchMovies } from 'components/api/request';
import { CastItem } from './CastItem/CastItem';
import { List, Item } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(item => {
        return (
          <Item key={item.id}>
            <CastItem item={item} />
          </Item>
        );
      })}
    </List>
  );
};
