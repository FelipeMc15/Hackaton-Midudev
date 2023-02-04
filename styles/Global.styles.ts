import { MantineTheme } from "@mantine/core";
const globalStyles = {
  title: (theme: MantineTheme) => ({
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  }),
  cardTitle: (theme: MantineTheme) => ({
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  }),
};
export default globalStyles;
