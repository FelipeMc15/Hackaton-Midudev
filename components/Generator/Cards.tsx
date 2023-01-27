import useStyles from "@/components/Generator/Generator.styles";
import {
  Text,
  Title,
  Card,
  Container,
  Group,
  Badge,
  SimpleGrid,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

export default function Cards() {
  const { classes } = useStyles();
  const mockdata = [
    {
      title: "Extreme performance",
      description:
        "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
      icon: IconGauge,
    },
    {
      title: "Privacy focused",
      description:
        "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
      icon: IconUser,
    },
    {
      title: "No third parties",
      description:
        "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
      icon: IconCookie,
    },
  ];
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon />
      <IconCookie />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
