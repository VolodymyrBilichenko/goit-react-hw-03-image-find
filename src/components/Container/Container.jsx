import PropTypes from 'prop-types';
import { ContainerStyle } from './Container.styled';

export const Container = ({ title, children }) => {
  return (
    <ContainerStyle>
      <h2 className="title">{title}</h2>
      {children}
    </ContainerStyle>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
