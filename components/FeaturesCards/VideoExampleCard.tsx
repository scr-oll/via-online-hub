import { Card, AspectRatio, Text, Group } from '@mantine/core';

export function VideoExampleCard() {
  return (
    <div style={{ width: 575, margin: 'auto' }}>
      <Group mt={15} mb={0}>
    <Card h={300} w={600} shadow="sm" padding="xl" radius="md" withBorder>
      <Card.Section>
      <div style={{ height: 225 }}>
      <AspectRatio ratio={42 / 15}>
      <iframe
        width="20"
        height="135"
        src="https://www.youtube.com/embed/MQmnN6HTzmY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      </AspectRatio>
      </div>
      </Card.Section>
      <div style={{ height: 75, margin: 'auto' }}>
      <Group mt={-15}>
        <Text h={100} pt={5} color="yellow.5" transform="uppercase" weight={600}>Video Example</Text>
        <Text ml={-135} color="dimmed" fz="sm">Lorem Ipsum.</Text>
      </Group>
      </div>
    </Card>
      </Group>
    </div>
  );
}
