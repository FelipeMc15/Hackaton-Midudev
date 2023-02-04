import { useRouter } from "next/router";
import { Stack, Tabs, TabsProps } from "@mantine/core";
import { IconDashboard, IconSettings, IconHistory } from "@tabler/icons-react";

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        root: {
          width: "100%",
        },
        tab: {
          ...theme.fn.focusStyles(),

          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[4]
          }`,
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          cursor: "pointer",
          fontSize: theme.fontSizes.sm,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },

          "&[data-active]": {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            borderRadius: "15px",
            color: theme.white,
          },
        },

        tabIcon: {
          display: "flex",
          alignItems: "center",
        },

        tabsList: {
          display: "flex",
          justifyContent: "space-around",
        },
      })}
      {...props}
    />
  );
}

export default function NavBar() {
  const router = useRouter();
  return (
    <Stack
      align="center"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "-webkit-fill-available",
        padding: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.dark[4]}`,
      })}
    >
      <StyledTabs
        value={router.pathname as string}
        onTabChange={(value) => router.push(value ?? "")}
      >
        <Tabs.List>
          <Tabs.Tab value="/ia" icon={<IconDashboard size={26} />}>
            Home
          </Tabs.Tab>
          <Tabs.Tab value="/history" icon={<IconHistory size={26} />}>
            History
          </Tabs.Tab>
          <Tabs.Tab value="/settings" icon={<IconSettings size={26} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>
      </StyledTabs>
    </Stack>
  );
}
