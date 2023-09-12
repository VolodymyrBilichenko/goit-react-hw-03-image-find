import { LoadMoreStyle } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreStyle type="button" onClick={onClick}>
      Load more
    </LoadMoreStyle>
  );
};
