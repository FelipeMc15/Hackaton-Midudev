import useStyles from "@/components/Settings/Settings.styles";
import { Container, Title } from "@mantine/core";
import HistoryList from "./HistoryList";

export default function History() {
  const { classes } = useStyles();
  return (
    <Container size="lg" py="xl" sx={{ minHeight: "99vh" }}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        History
      </Title>
      <HistoryList />
    </Container>
  );
}
