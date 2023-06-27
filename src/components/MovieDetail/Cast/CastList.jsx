// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchMovies } from 'components/api/request';
import { CastItem } from "./CastItem/CastItem";

export const CastList = ({ cast }) => {
  
 
  return (
    <div>
      <h3> Cast List</h3>
      <ul>
        {cast.map(item => {
          return (
            <li key={item.id}>
              <CastItem item={ item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
