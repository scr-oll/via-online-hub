import { createStyles, Container, Group, ActionIcon, rem, MantineProvider, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandDiscord } from '@tabler/icons-react';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  footer: {
    height: -500,
    marginTop: rem(1),
    borderTop: `${rem(2)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[9]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes, theme } = useStyles();

  return (
    <MantineProvider>
      <div className="main-footer sticky-bottom">
    <div style={{ position: 'fixed', bottom: 0, right: 0, left: 0, width: '100%', height: 75 }} className={classes.footer}>
      <Text size="xl" ml={-1100} color={theme.colorScheme === 'dark' ? 'white' : 'black'}>
        Managed by the Systems Department
      </Text>
      <Container className={classes.inner}>
      <Group ml={-400}>
      <Image src="vaklogosvg.svg" alt="VAK Logo" width={40} height={40} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: 75 }} />
      </Group>
        <Group spacing={0} className={classes.links} position="right" noWrap mr={-400}>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandDiscord size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
      </div>
    </MantineProvider>
  );
}
