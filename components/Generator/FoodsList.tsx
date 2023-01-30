import useStyles from "@/components/Generator/Generator.styles";
import { Text, Title, Card, Container, SimpleGrid } from "@mantine/core";
import { IconBolt, IconGrowth, IconLeaf } from "@tabler/icons-react";

// TO DO:
// add Hover effect in the cards
// update diets description
// change the title xd
export default function FoodsList() {
  const { classes } = useStyles();
  const mockdata = [
    {
      title: "Break fast",
      description:
        "Excludes all animal-derived products, including meat, milk, eggs, and honey.",
      icon: IconLeaf,
    },
    {
      title: "Lunch",
      description:
        "Designed to help control blood pressure, it is based on a diet rich in fruits, vegetables, whole grains, and lean proteins.",
      icon: IconBolt,
    },
    {
      title: "Dinner",
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
      // onClick={() => onClick(feature.title)}
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
    <Container size="lg" py="xl">
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
