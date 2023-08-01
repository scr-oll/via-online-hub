import { createStyles, Container, Group, rem, MantineProvider, Text } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  footer: {
    height: 50,
    marginTop: rem(10),
    borderTop: `${rem(2)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[9]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    background: 'red.9',
    paddingBottom: 0,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: 50,
    },
  },
}));

export function FooterSocial() {
  const { classes, theme } = useStyles();

  return (
    <MantineProvider>
      <div className="main-footer" style={{ bottom: 0, left: 0, right: 0, position: 'absolute' }}>
    <div className={classes.footer}>
      <Container className={classes.inner} my={-15} style={{ bottom: 0, width: '100%', height: 0 }}>
      <Group mb={-30} ml={-450}>
      <Image src="vaklogosvg.svg" alt="VAK Logo" width={40} height={40} style={{ width: '100%' }} />
      </Group>
      <Text mb={-30} ml={-1200} size="l" color={theme.colorScheme === 'dark' ? 'dimmed' : 'dimmed'}>
          Managed by the Systems Department
      </Text>
        <Group spacing={50} className={classes.links} position="right" noWrap mb={-30} mr={-450}>
          <Text size="l" color={theme.colorScheme === 'dark' ? 'dimmed' : 'dimmed'}>
          Contact
          </Text>
          <Text size="l" color={theme.colorScheme === 'dark' ? 'dimmed' : 'dimmed'}>
          Text
          </Text>
          <Text size="l" color={theme.colorScheme === 'dark' ? 'dimmed' : 'dimmed'}>
          Text
          </Text>
          <Text size="l" color={theme.colorScheme === 'dark' ? 'dimmed' : 'dimmed'}>
          Text
          </Text>
        </Group>
      </Container>
    </div>
      </div>
    </MantineProvider>
  );
}
