import useStyles from "@/components/Generator/Generator.styles";
import { useDietStore } from "@/lib/store";
import { Text, Title, Card, Container } from "@mantine/core";

// TO DO:
// add Hover effect in the cards
// update diets description
// change the title xd
export default function IAResponse() {
  const { classes } = useStyles();
  const [diet] = useDietStore((state) => [state.diet]);
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        IA Response
      </Title>
      <Card shadow="md" radius="md" p="xl">
        <Text size="sm" color="dimmed">
          {diet.length ? diet : "NO DATA"}
        </Text>
      </Card>
    </Container>
  );
}
