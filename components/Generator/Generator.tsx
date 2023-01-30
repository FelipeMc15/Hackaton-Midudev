// import useStyles from "@/components/Generator/Generator.styles";
import { useState } from "react";
import { Container, SegmentedControl, Tabs } from "@mantine/core";
import TypeDiets from "./TypesDiets";
import FoodsList from "./FoodsList";
import IAResponse from "./AIResponse";

// TO DO:
// add Hover effect in the cards
// update diets description
// change the title xd
export default function Generator() {
  const [section, setSection] = useState<"diet" | "food" | "response">("diet");
  return (
    <Container size="lg" py="xl">
      <Tabs defaultValue="type" value={section}>
        <SegmentedControl
          value={section}
          onChange={(value: "diet" | "food" | "response") => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: "Diet", value: "diet" },
            { label: "Food", value: "food" },
            { label: "Response", value: "response" },
          ]}
        />
        <Tabs.Panel value="diet" pt="xs">
          <TypeDiets />
        </Tabs.Panel>
        <Tabs.Panel value="food" pt="xs">
          <FoodsList />
        </Tabs.Panel>
        <Tabs.Panel value="response" pt="xs">
          <IAResponse />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
