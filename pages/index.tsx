import { Center, Group } from '@mantine/core';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu/HeaderMegaMenu';
import { FooterSocial } from '../components/FootersSocial/FooterSocial';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { CardsCarousel } from '../components/Carousel/Carousel';
import { BannerCardExample } from '../components/FeaturesCards/BannerExampleCard';
import { VideoExampleCard } from '../components/FeaturesCards/VideoExampleCard';
import { ImageAnnouncementCardExample } from '../components/FeaturesCards/ImageAnnouncementCardExample';

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <CardsCarousel />
      <Group mt={10} ml="auto" mr="auto" py="auto">
       <BannerCardExample />
       <VideoExampleCard />
       <ImageAnnouncementCardExample />
      </Group>
      <FooterSocial />
      <Center>
      <ColorSchemeToggle />
      </Center>
    </>
  );
}
