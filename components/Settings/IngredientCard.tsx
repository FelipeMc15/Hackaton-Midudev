import useStyles from "@/components/Settings/Settings.styles";
import { Text, ActionIcon } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

export default function IngredientCard({
  ingredient,
  onRemove,
}: {
  ingredient: string;
  // eslint-disable-next-line no-unused-vars
  onRemove?: (value: string) => void;
}) {
  const { classes } = useStyles();

  return (
    <div className={classes.item}>
      <Text>{ingredient ?? ""}</Text>
      {onRemove && (
        <ActionIcon
          variant="subtle"
          color="red"
          onClick={() => onRemove(ingredient)}
        >
          <IconX size={20} />
        </ActionIcon>
      )}
    </div>
  );
}
