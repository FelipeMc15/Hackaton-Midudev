import useStyles from "@/components/Generator/Generator.styles";
import { Text, Title, Card, SimpleGrid, Container } from "@mantine/core";
import { useDietStore } from "../../lib/store/index";
import {
  IconFlame,
  IconBolt,
  IconEgg,
  IconGrowth,
  IconLeaf,
  IconSwitch2,
} from "@tabler/icons-react";

// TO DO:
// add Hover effect in the cards
// update diets description
// change the title xd
export default function TypeDiets() {
  const { classes, theme } = useStyles();
  const [diet, setDiet] = useDietStore((state) => [state.type, state.setType]);
  const mockdata = [
    {
      title: "Low-carb diet",
      description:
        "Limits the consumption of foods high in carbohydrates, such as bread, rice, and pasta, and instead promotes the intake of proteins and healthy fats.",
      icon: IconFlame,
    },
    {
      title: "Intermittent fasting diet",
      description:
        "Consists of alternating periods of fasting with periods of feeding.",
      icon: IconSwitch2,
    },
    {
      title: "Mediterranean diet",
      description:
        "Based on a traditional dietary pattern of Mediterranean countries, which includes a high consumption of fruits, vegetables, fish, nuts and olive oil.",
      icon: IconEgg,
    },
    {
      title: "Vegan diet",
      description:
        "Excludes all animal-derived products, including meat, milk, eggs, and honey.",
      icon: IconLeaf,
    },
    {
      title: "DASH diet",
      description:
        "Designed to help control blood pressure, it is based on a diet rich in fruits, vegetables, whole grains, and lean proteins.",
      icon: IconBolt,
    },
    {
      title: "Ketogenic diet",
      description:
        "It is a low-carb, high-fat diet that promotes ketosis, a metabolic state in which the body burns fat instead of carbohydrates for energy.",
      icon: IconGrowth,
    },
  ];
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
      sx={{
        border:
          diet === feature.title
            ? `3px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.blue[5]
                  : theme.colors.blue[1]
              }`
            : `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1]
              }`,
      }}
      onClick={() => setDiet(feature.title)}
    >
      <feature.icon />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl" p={0}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        Select Type Diet
      </Title>
      <SimpleGrid
        cols={3}
        spacing="xl"
        verticalSpacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
