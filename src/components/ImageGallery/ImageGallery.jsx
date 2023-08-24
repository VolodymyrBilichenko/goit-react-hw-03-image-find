import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ imagesLi }) => {
  return (
    <ImageGalleryStyle>
      {imagesLi.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </ImageGalleryStyle>
  );
};
