import React from 'react';

interface ImageLinkProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={altText} className="flex h-12 w-auto" />
    </a>
  );
};

export default ImageLink;