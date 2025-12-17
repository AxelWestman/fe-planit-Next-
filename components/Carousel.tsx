'use client'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';

export default function UncontrolledExample() {
  return (
    <div className="w-1/2 hidden lg:block">
      <Carousel fade controls={false}>
        <Carousel.Item>
          <ExampleCarouselImage src="/ny.jpg" alt="NewYork" />
          <Carousel.Caption>
            {/*<h3>Playa</h3>
            <p>Primera imagen del carrusel.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage src="/playaPc.jpg" alt="Playa" />
          <Carousel.Caption>
           {/*<h3>Montaña</h3>
            <p>Segunda imagen del carrusel.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage src="/denmark.jpg" alt="Dinamarca" />
          <Carousel.Caption>
            {/*<h3>Ciudad</h3>
            <p>Tercera imagen del carrusel.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

