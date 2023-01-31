import useStyles from "@/components/Generator/Generator.styles";
import useGenerateIA from "@/lib/hook/useGenerateIA";
import { useDietStore } from "@/lib/store";
import { Text, Title, Card, Container } from "@mantine/core";

export default function IAResponse() {
  const { classes } = useStyles();
  const [diet] = useDietStore((state) => [state.diet]);
  const { data, loading } = useGenerateIA();
  console.log(data, loading);
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        IA Response
      </Title>
      <Card shadow="md" radius="md" p="xl">
        <Text size="sm" color="dimmed">
          {diet.length
            ? diet.split("\n\n").map((str) => <p key={str}>{str}</p>)
            : "NO DATA"}
        </Text>
      </Card>
    </Container>
  );
}
