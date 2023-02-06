import useStyles from "@/components/Generator/Generator.styles";
import useGenerateIA from "@/lib/hook/useGenerateIA";
import { useDietStore } from "@/lib/store";
import { Text, Title, Card, Container } from "@mantine/core";
import Loader from "../Loader";

export default function IAResponse() {
  const { classes } = useStyles();
  const [diet] = useDietStore((state) => [state.diet]);
  const { loading } = useGenerateIA();
  return (
    <Container size="lg" py="xl" p={0}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        IA Response
      </Title>
      <Card className={classes.response} shadow="md" radius="md" p="xl" mt={50}>
        <Text size="sm" color="dimmed">
          {diet.length && !loading ? (
            diet.split("\n\n").map((str) => <p key={str}>{str}</p>)
          ) : (
            <Loader />
          )}
        </Text>
      </Card>
    </Container>
  );
}
