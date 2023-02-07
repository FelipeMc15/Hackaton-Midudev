import { SimpleGrid, Text } from "@mantine/core";
import { useBlackListStore } from "@/lib/store";
import IngredientCard from "../Settings/IngredientCard";

export default function IgnoredIngredients() {
  const [ingredients] = useBlackListStore((state) => [state.ingredients]);

  return (
    <SimpleGrid
      cols={1}
      spacing="md"
      mt={50}
      breakpoints={[{ maxWidth: "md", cols: 1 }]}
    >
      <Text align="center" fw={500} fz="lg">
        Ignored Ingredients
      </Text>
      {ingredients.map((ingredient) => (
        <IngredientCard key="ingredient" ingredient={ingredient} />
      ))}
    </SimpleGrid>
  );
}
