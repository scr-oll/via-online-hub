import { Card, Image, Text, Group, Box } from '@mantine/core';

export function ImageAnnouncementCardExample() {
  return (
    <div style={{ width: 575, margin: 'auto' }}>
      <Group mt={20} mb={0}>
    <Card h={300} shadow="sm" padding="xl" radius="md" withBorder>
      <Card.Section>
      <Group position="apart" spacing="xl">
        <Image
          src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW4lMjBncmF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          height={100}
          width={100}
          ml={15}
          mt={15}
          alt="Norway"
          radius={20}
        />
        <Text pr={15} mt={-75} color="yellow.5" transform="uppercase" weight={600}>Username</Text>
      </Group>
      </Card.Section>
      <div style={{ height: 75, margin: 'auto' }}>
      <Group position="apart" mt={5} mb={5}>
        <Text color="yellow.5" transform="uppercase" weight={600}>Banner Example Card</Text>
        <Image
          src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW4lMjBncmF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          height={30}
          width={30}
          mr={80}
          mt={-225}
          alt="Norway"
          radius={20}
        />
      </Group>
      <Box h={5} w={40} c="red.9" bg="red.9"> </Box>
      <Text pt={5} size="sm" color="dimmed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt
      </Text>
      </div>
    </Card>
      </Group>
    </div>
  );
}
