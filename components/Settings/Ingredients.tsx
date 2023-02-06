import useStyles from "@/components/Settings/Settings.styles";
import {
  Button,
  Title,
  SimpleGrid,
  Text,
  Container,
  Input,
  Flex,
} from "@mantine/core";
import { useBlackListStore } from "@/lib/store";
import { useState } from "react";
import IngredientCard from "./IngredientCard";

export default function Ingredients() {
  const { classes } = useStyles();
  const { ingredients, addIngredient, removeIngredient } = useBlackListStore(
    (state) => state
  );
  const [ingredientForm, setIngredientForm] = useState<string>("");

  return (
    <Container size="lg" py="sm" p={0}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        list of ingredients ignored
      </Title>
      <SimpleGrid
        cols={1}
        spacing="md"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addIngredient(ingredientForm);
          }}
        >
          <Input.Wrapper
            id="input-demo"
            withAsterisk
            description="This ingredient will be excluded from results"
          >
            <Flex
              justify="center"
              gap="md"
              align="center"
              direction="row"
              wrap="nowrap"
            >
              <Input
                variant="filled"
                placeholder="Ingredient"
                sx={{
                  width: "100%",
                }}
                required
                value={ingredientForm}
                onChange={(e) => setIngredientForm(e.target.value)}
              />
              <Button type="submit">Add</Button>
            </Flex>
          </Input.Wrapper>
        </form>
        {ingredients.length > 0 ? (
          ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient}
              ingredient={ingredient}
              onRemove={() => removeIngredient(ingredient)}
            />
          ))
        ) : (
          <div className={classes.item}>
            <Text>No Ingredients</Text>
          </div>
        )}
      </SimpleGrid>
    </Container>
  );
}
