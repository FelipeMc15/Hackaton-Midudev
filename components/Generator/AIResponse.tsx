import useStyles from "@/components/Generator/Generator.styles";
import { Text, Title, Card, Container } from "@mantine/core";

// TO DO:
// add Hover effect in the cards
// update diets description
// change the title xd
export default function IAResponse() {
  const { classes } = useStyles();
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        IA Response
      </Title>
      <Card shadow="md" radius="md" p="xl">
        <Text size="sm" color="dimmed">
          TEST
        </Text>
      </Card>
    </Container>
  );
}
