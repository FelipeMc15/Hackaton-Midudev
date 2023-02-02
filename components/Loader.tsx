import { createStyles } from "@mantine/core";

export default function Loader() {
  const useStyles = createStyles(() => ({
    loading: {
      margin: "0 auto",
      color: "white",
      fontSize: "30px",
      "&:before": {
        content: '"Loading"',
        animation: "load 2s linear",
        animationIterationCount: "infinite",
      },
      "@keyframes load": {
        "0%": { content: '"Loading"' },
        "20%": { content: '"Loading."' },
        "40%": { content: '"Loading.."' },
        "60%": { content: '"Loading.."' },
        "80%": { content: '"Loading..."' },
      },
    },
  }));
  const { classes } = useStyles();
  return <div className={classes.loading}></div>;
}
