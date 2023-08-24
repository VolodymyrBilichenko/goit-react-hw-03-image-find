import { NotFoundStyle } from './NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundStyle>
      <p className="not__found">Nothing found for your request</p>
    </NotFoundStyle>
  );
};
