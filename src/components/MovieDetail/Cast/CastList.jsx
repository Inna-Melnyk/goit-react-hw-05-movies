import PropTypes from 'prop-types';

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

CastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
