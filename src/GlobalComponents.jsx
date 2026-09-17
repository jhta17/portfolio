import {
  Box,
  createStyles,
  Paper,
  Text,
  Group,
  Button,
  Burger,
  Image,
} from "@mantine/core";
import { BiCloud, BiHeart, BiCurrentLocation } from "react-icons/bi";

const useStyles = createStyles((theme) => ({
  header: {
    width: "auto",
    position: "relative",
  },
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition:
      "transform 150ms ease, box-shadow 100ms ease, background-color 100ms ease",
    paddingRight: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    border: "1px solid #ccc",
    paddingLeft: theme.spacing.xl,
  },
}));

export function Title({ content }) {
  return <div className="title">{content}</div>;
}

export function Heading({ content }) {
  return <div className="heading">{content}</div>;
}

export function InfoCard({ title, description, icon }) {
  return (
    <Box className="info-box">
      <Text className="info-title" size="xl" weight={500} mt="md">
        {icon} {title}
      </Text>
      <Text className="info-description" size="sm" mt="sm">
        {description}
      </Text>
    </Box>
  );
}

export function ProjectCard({ title, description, year, skills, image }) {
  return (
    <Paper className={"project-card"} shadow="xs" p="xl">
      <div className={"project-img"}>
        <Image src={image} alt="Image of project" />
      </div>
      <div className={"project-section"}>
        <Text className={"project-title"}>{title}</Text>
        <Text className={"project-skills"}>
          {year} | Skills practiced: {skills}
        </Text>
        <Text className={"project-description"}>{description}</Text>
      </div>
    </Paper>
  );
}
