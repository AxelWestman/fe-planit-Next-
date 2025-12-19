'use client'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';

export default function UncontrolledExample() {
  return (
    <div className="w-1/2 hidden lg:block">
      <Carousel fade controls={false}>
        <Carousel.Item>
          <ExampleCarouselImage src="https://i.pinimg.com/736x/92/a1/a5/92a1a5bea064b5c48cc8b5bdee84de7b.jpg" alt="NewYork" />
          <Carousel.Caption>
            {/*<h3>Playa</h3>
            <p>Primera imagen del carrusel.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage src="https://st2.depositphotos.com/5685304/11996/i/450/depositphotos_119962436-stock-photo-chureito-pagoda-and-mount-fuji.jpg" alt="Playa" />
          <Carousel.Caption>
           {/*<h3>Montaña</h3>
            <p>Segunda imagen del carrusel.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage src="https://images.unsplash.com/photo-1552560880-2482cef14240?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluYW1hcmNhfGVufDB8fDB8fHww" alt="Dinamarca" />
          <Carousel.Caption>
            {/*<h3>Ciudad</h3>
            <p>Tercera imagen del carrusel.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

