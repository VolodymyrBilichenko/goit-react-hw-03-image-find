import { LoadMoreStyle } from './LoadMore.styled';

export const LoadMore = ({ onClick, isVisible }) => {
  return (
    <LoadMoreStyle
      type="button"
      onClick={onClick}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      Load more
    </LoadMoreStyle>
  );
};
