import React from 'react';

const ImageWithInnerBorder = ({ src, alt }) => {
  return (
    <div className="relative inline-block w-full h-full">
      <img
        src={src}
        alt={alt}
        className="rounded-lg object-cover w-full h-full"
      />
      <div className="absolute inset-0 m-4 rounded-lg border border-white pointer-events-none"></div>
    </div>
  );
};

const ImageWithBorder = ({ src, alt }) => {
  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt={alt}
        className="w-64 h-64 object-cover border-4 border-white p-1 box-content"
      />
      <div className="absolute inset-0 border-4 border-black pointer-events-none"></div>
    </div>
  );
};

export { ImageWithInnerBorder, ImageWithBorder };