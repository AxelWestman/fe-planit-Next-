'use client';
import Image from 'next/image';

export default function ExampleCarouselImage({
  src,
  alt,
}: {
  src: any;
  alt: any;
}) {
   return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );
}