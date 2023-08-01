import { createStyles, Image, Card, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles(() => ({

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(5),
    },
  },
}));

const images = [
  'https://images.unsplash.com/photo-1618123069754-cd64c230a169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhaW4lMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW4lMjBncmF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
];

export function CardsCarousel() {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={500} />
    </Carousel.Slide>
  ));

  return (
    <Card radius={0} mt={-122}>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>
    </Card>
  );
}
