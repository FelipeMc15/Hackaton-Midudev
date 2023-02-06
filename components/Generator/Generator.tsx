// import useStyles from "@/components/Generator/Generator.styles";
import { useState } from "react";
import { Container, SegmentedControl, Tabs, Button, Grid } from "@mantine/core";
import { useDietStore } from "@/lib/store";
import TypeDiets from "./TypesDiets";
import FoodsList from "./FoodsList";
import IAResponse from "./AIResponse";

// TO DO:
// add Hover effect in the cards
// update diets description
// change the title xd
export default function Generator() {
  const [section, setSection] = useState<"type" | "food" | "diet">("type");
  const [data] = useDietStore((state) => [
    { type: state.type, food: state.food, diet: state.diet },
  ]);

  const handleClickNext = () => {
    if (section === "type") {
      setSection("food");
    } else {
      setSection("diet");
    }
  };

  const handleClickPrevious = () => {
    if (section === "food") {
      setSection("type");
    } else {
      setSection("food");
    }
  };

  return (
    <Container size="lg" py="xl" sx={{ minHeight: "99vh" }}>
      <Tabs defaultValue="type" value={section}>
        <SegmentedControl
          value={section}
          onChange={(value: "diet" | "food" | "type") => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: "Diet", value: "type" },
            { label: "Food", value: "food", disabled: data.type.length === 0 },
            {
              label: "Response",
              value: "diet",
              disabled: data.type.length === 0 || data.food.length === 0,
            },
          ]}
        />
        <Tabs.Panel value="type" pt="xs">
          <TypeDiets />
        </Tabs.Panel>
        <Tabs.Panel value="food" pt="xs">
          <FoodsList />
        </Tabs.Panel>
        <Tabs.Panel value="diet" pt="xs">
          <IAResponse />
        </Tabs.Panel>
      </Tabs>
      <Grid justify="space-between">
        <Grid.Col span={6}>
          {section !== "type" && (
            <Button onClick={handleClickPrevious} variant="outline">
              Previous
            </Button>
          )}
        </Grid.Col>
        <Grid.Col
          span={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {section !== "diet" && (
            <Button
              onClick={handleClickNext}
              disabled={data[section] === null || data[section].length === 0}
            >
              Next
            </Button>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  );
}
