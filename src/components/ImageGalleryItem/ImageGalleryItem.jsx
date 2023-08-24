import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <ImageGalleryItemStyle key={id}>
      <img className="galleryItem__image" src={webformatURL} alt={tags} />
    </ImageGalleryItemStyle>
  );
};
