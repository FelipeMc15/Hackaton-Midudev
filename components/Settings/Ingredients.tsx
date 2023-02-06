import useStyles from "@/components/Settings/Settings.styles";
import {
  Button,
  Title,
  SimpleGrid,
  Text,
  Container,
  Input,
  Flex,
  ActionIcon,
} from "@mantine/core";
import { useBlackListStore } from "@/lib/store";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function Ingredients() {
  const { classes } = useStyles();
  const { ingredients, addIngredient, removeIngredient } = useBlackListStore(
    (state) => state
  );
  const [ingredientForm, setIngredientForm] = useState("");
  console.log(ingredients);

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
            <div className={classes.item} key={ingredient}>
              <Text>{ingredient ?? ""}</Text>
              <ActionIcon
                variant="subtle"
                color="red"
                onClick={() => removeIngredient(ingredient)}
              >
                <IconX size={20} />
              </ActionIcon>
            </div>
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
