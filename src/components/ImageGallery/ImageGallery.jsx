import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.module';
import PropTypes from 'prop-types';

export const ImageGallery = ({ galleryItems }) => {
  return (
    <Gallery>
      {galleryItems.map(galleryItem => {
        return (
          <ImageGalleryItem key={galleryItem.id} galleryItem={galleryItem} />
        );
      })}
    </Gallery>
  );
};
ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};