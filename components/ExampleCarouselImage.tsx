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
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}