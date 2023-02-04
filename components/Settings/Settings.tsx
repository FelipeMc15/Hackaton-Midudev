import useStyles from "@/components/Settings/Settings.styles";
import { Container, Title } from "@mantine/core";
import Ingredients from "./Ingredients";

export default function Settings() {
  const { classes } = useStyles();
  return (
    <Container size="lg" py="xl" sx={{ minHeight: "99vh" }}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        Settings
      </Title>
      <Ingredients />
    </Container>
  );
}
