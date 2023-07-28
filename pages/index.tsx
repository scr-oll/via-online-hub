import { Center } from '@mantine/core';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu/HeaderMegaMenu';
import { FooterSocial } from '../components/FootersSocial/FooterSocial';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { CardsCarousel } from '../components/Carousel/Carousel';
import { SmallCarousel } from '../components/SmallCarousel/SmallCarousel';

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <CardsCarousel />
      <SmallCarousel />
      <FooterSocial />
      <Center>
      <ColorSchemeToggle />
      </Center>
    </>
  );
}
