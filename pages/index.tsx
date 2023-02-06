import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Grid,
  Avatar,
} from "@mantine/core";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  created: {
    marginTop: 0,
    fontSize: 17,
  },

  powered: {
    fontSize: 14,
  },

  img: {
    marginTop: "3px",
    marginBottom: "3px",
    height: "105px",
    width: "399px",
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
  sponsor: {
    marginTop: 40,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Nutriplanes</title>
      </Head>
      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <Image
            src="/logo-nutriplanes.png"
            quality={100}
            alt="logo"
            width={500}
            height={150}
          />

          <Text className={classes.description} color="dimmed">
            NutriPlanes is the perfect solution for those seeking a healthy and
            customized diet. We use artificial intelligence to create
            personalized meal plans that fit your nutritional goals, food
            preferences, and dietary restrictions. With NuntriPlans, you no
            longer have to worry about meal planning, simply follow your recipes
            and enjoy a balanced and delicious diet. Start your journey towards
            a healthier life with NuntriPlans today!
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              onClick={() => router.push("/ia")}
            >
              Get started
            </Button>

            <Button
              component="a"
              href="https://github.com/FelipeMc15/Hackaton-Midudev"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              variant="default"
              className={classes.control}
            >
              GitHub
            </Button>
          </Group>
          <div className={classes.sponsor}>
            <Grid justify="space-between" align="center">
              <Grid.Col>
                <Text className={classes.powered} color="dimmed">
                  Powered by
                </Text>
              </Grid.Col>
              <Grid.Col>
                <a
                  href="https://cohere.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="./cohere.svg"
                    alt="cohere"
                    width={150}
                    height={50}
                  />
                </a>
              </Grid.Col>
              <Grid.Col>
                <Text
                  className={classes.created}
                  gradient={{ from: "blue", to: "cyan" }}
                >
                  Created by
                </Text>
              </Grid.Col>
              <Grid.Col>
                <Group>
                  <Avatar
                    component="a"
                    href="https://github.com/Lucas-FullStackX"
                    target="_blank"
                    rel="noopener noreferrer"
                    radius="xl"
                    src="https://github.com/Lucas-FullStackX.png"
                    alt="it's me"
                  />

                  <Avatar
                    component="a"
                    href="https://github.com/FelipeMc15"
                    target="_blank"
                    rel="noopener noreferrer"
                    radius="xl"
                    src="https://github.com/FelipeMc15.png"
                    alt="it's me"
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}
