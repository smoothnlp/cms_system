import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const ImageCards = ({ image }) => {
  return (
    <div className="relative space-y-4">
      <div className="flex items-end justify-center lg:justify-start space-x-4">
        <img
          className="rounded-lg shadow-lg w-full"
          width="200"
          src={getStrapiMedia(delve(image, 'attributes.url'))}
          alt={delve(image, 'attributes.alternativeText')}
        />
      </div>
    </div>
  );
};

ImageCards.defaultProps = {};

export default ImageCards;
