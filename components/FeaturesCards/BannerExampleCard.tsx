import { Card, Image, Text, Group } from '@mantine/core';

export function BannerCardExample() {
  return (
    <div style={{ width: 575, margin: 'auto' }}>
      <Group ml={0} mt={15} mb={0}>
    <Card shadow="sm" padding="xl" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW4lMjBncmF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          height={200}
          alt="Norway"
        />
      </Card.Section>
      <div style={{ height: 75, margin: 'auto' }}>
      <Group h={30} position="apart" mt={0} mb={5}>
        <Text color="yellow.5" transform="uppercase" weight={600}>Banner Example Card</Text>
      </Group>
      <Text size="sm" color="dimmed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt
      </Text>
      </div>
    </Card>
      </Group>
    </div>
  );
}
