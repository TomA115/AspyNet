import React from 'react';
import './/CSS/ImageLink.css';

interface ImageLinkProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={altText} className="social-icon" />
    </a>
  );
};

export default ImageLink;