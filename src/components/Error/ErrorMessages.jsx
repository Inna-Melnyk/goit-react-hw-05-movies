import PropTypes from 'prop-types';

export const ErrorMessages = ({ children }) => {
  return (
    <div
      style={{
        color: 'red',
      }}
    >
      {children}
    </div>
  );
};

ErrorMessages.propTypes = {
  images: PropTypes.element,
};
