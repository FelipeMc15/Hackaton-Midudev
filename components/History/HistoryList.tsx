import useStyles from "@/components/History/History.styles";
import { SimpleGrid, Text, Container, Grid } from "@mantine/core";
import { useHistoryStore } from "@/lib/store";

export default function HistoryList() {
  const { classes } = useStyles();
  const [history] = useHistoryStore((state) => [state.history]);
  return (
    <Container size="lg" py="sm" p={0}>
      <SimpleGrid
        cols={1}
        spacing="md"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {history.length > 0 ? (
          history.map((historyItem) => (
            <div className={classes.item} key={historyItem.diet}>
              <Grid>
                <Grid.Col span={6}>
                  <Text>{historyItem.type ?? ""}</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text>{historyItem.food ?? ""}</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text>{historyItem.diet ?? ""}</Text>
                </Grid.Col>
              </Grid>
            </div>
          ))
        ) : (
          <div className={classes.item}>
            <Text>History empty</Text>
          </div>
        )}
      </SimpleGrid>
    </Container>
  );
}
