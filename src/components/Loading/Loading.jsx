import { InfinitySpin } from 'react-loader-spinner';
import { LoadingStyle } from './Loading.styled';

export const Loading = () => {
  return (
    <LoadingStyle>
      <InfinitySpin width="200" color="#FFF" />
    </LoadingStyle>
  );
};
