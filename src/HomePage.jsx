import {
  SimpleGrid,
  Divider,
  Badge,
  Stack,
  Flex,
  Container,
  Space,
  Timeline,
  Grid,
} from "@mantine/core";
import { BiCloud, BiHeart, BiCurrentLocation } from "react-icons/bi";
import {
  Title,
  InfoCard,
  Heading,
  Headbar,
  ProjectCard,
} from "./GlobalComponents";
import project1 from "./projectpics/technicafellowship.PNG";
import project2 from "./projectpics/colorpaletteproj.PNG";
import project3 from "./projectpics/centroidredesign.PNG";
import project4 from "./projectpics/testudoredesignproj.PNG";
import project5 from "./projectpics/covidratesmapproj.PNG";
import project6 from "./projectpics/label.jpg";
import project7 from "./projectpics/Pthemes3.PNG";

const aboutData = [
  {
    title: "About",
    description:
      "Welcome to my site! I am a third year undergraduate student at the University of Maryland. I am majoring in two of my most favorite subjects: computer science and psychology. At work, I like to try and think outside of the box, whether it is to solve problems or design something brand new. In this site, you will find some basic information about me, and some projects that demonstrate my experiences in user interfaces and design to get a better idea of who I am. ",
    icon: <BiCloud />,
  },
  {
    title: "Interests",
    description:
      "My interests are diverse as I have a constant curiosity and hunger for learning. I enjoy learning about the basis of psychology within our brain's networks as well as how we are all impacted by psychology through advertising, business, and social strategies. These fields in psychology are heavily targetted by technology, which is another one of my main interests. I enjoy programming and learning about data science, specifically artificial intelligence and its applications for our future. ",
    icon: <BiHeart />,
  },
  {
    title: "Goals",
    description:
      "In my career, I hope to explore design and psychology as I navigate through various technology and product oriented fields. Most of my experience is related to programming, so I am very new to design. However, my end goal is to switch into that field at some point. Once I have enough experience with software development, I hope to transfer these skills in a creative job such as product or UI/UX design. ",
    icon: <BiCurrentLocation />,
  },
];

const projectData = [
  {
    title: "Technica Fellowship Program",
    year: "2022",
    skills: "Teaching, HTML/CSS, Web-development",
    description:
      "As a part of the organizing team for Technica (the world's largest nonbinary hacakthon), I co-taught a fellowship program for a cohort of 15 students from various highschools. This program was designed to teach web development to women and nonbinaries who are new to programming. Each student learned HTML, CSS, and Javascript and were able to employ their skills in their very own about me page. I created many basic skeletons (one of which is above) for them to draw inspiration from, learn from, and understand how each aspect of the HTML and CSS behind the skeleton works.",
    image: project1,
  },
  {
    title: "Centroid Redesign",
    description:
      "A company I tutored for used a system to track each student and their tutoring sessions. This system was a form on a website that needed to be filled out for every student and asked for many outdated pieces of information that took up time and slowed efficiency, especially because each tutor taught four students at the same time. Additionally, a separate tab was needed for each student since it was not possible to do multiple students with one form. Since I recently learned Adobe XD, I decided to get more practice with it by reimagining a more efficient version of Centroid where multiple students can be tracked in a more efficient way. Above is the resulting application that lets you search for and add new student tracking cards as they come, and fill out the necessary information in a quick manner. I showed my redesign to my manager who was inspired to rehaul some of his systems for his company.",
    year: "2021",
    skills: "Adobe XD, User experience design",
    image: project3,
  },
  {
    title: "Color Palette Grid Generator",
    description:
      "In my free time, I like to create illustrations and color them in with a color palette of my choosing. Since I found it hard to decide which colors to priotize as the 'main' color and which ones to keep at a minimum as an 'accent'. This is a mini application that I decided to make during winter break that would organize the colors across a grid so that I may visualize them better. Since I had been wanting to learn React for a long time, this was the perfect opportunity for me to do so. After taking a short online React course, I built the user interface shown above and programmed it so it shuffled a given color palette across a grid. Since it was my first time working with Javascript instead of HTML/CSS for a website, I struggled a lot, especially with using hooks, but I was able to get a simple working product finished within a week.",
    year: "2020",
    skills: "React, Javascript, Figma, HTML/CSS, User interface design",
    image: project2,
  },
  {
    title: "Testudo Redesign",
    description:
      "In my Introduction to Design Cultures and Creativity class, I was introduced to a program called Adobe XD. I really loved how intuitive it was to create any interface design of my dreams. One of the major projects involved redesigning a system that is currently hard and frustrating to use. I chose our school's course registration system. Currently, the design is outdated and made in the early 2000's, with one site to register on, one site to view courses available, and a third site to check your waitlist status. This did not make much sense to me, so in my redesign, I focused on combining all of the relevant tasks for course registration into one web application. In this reimagination, students can browse courses, select interesting ones to view on their schedule, and directly register from the same application. Since many students prefer to build their schedule to their liking before finalizing their decisions, the ability to add to the schedule allows an easy way to visualize their courses before finalizing their choice by clicking 'Register'. ",
    year: "2020",
    skills: "Adobe XD, User interface and experience design, Product design",
    image: project4,
  },
  {
    title: "Covid Growth Rate Map",
    description:
      "This is a small project I made during lockdown that could visualize covid growth rates with past data across multiple counties. My main goal for this project was to gain some working experience in dealing with data, how web API's worked, and creating a web application that involved more than just HTML and CSS. It was my first attempt at using my own Javascript in a website. This map color coded each county based on historical Covid rate data, where darker colors represent sharper, faster increases in Covid cases. The hardest part of this project actually had nothing to do with Javascript, but rather cleaning and parsing that data so that it was in readable JSON format. The government data site that I found the data only had a CSV version of the data, so I created a python script to parse the CSV data into JSON format, as well as calculating the percent increase in order to map it. ",
    year: "2020",
    skills:
      "Web API's, Python, Javascript, Figma, HTML/CSS, User interface design",
    image: project5,
  },
  {
    title: "Automated Voice Control Braille Label Printer",
    description:
      "During the summer of 2019, I undertook a research project under Dr. Huishu Peng at the Human Computer Interaction Lab at the University of Maryland. This interaction of humans and computer science is an area I am really interested in, and I was lucky to be able to explore this field for a summer. For my project, I independently created a prototype of an automated voice controlled label printer in order to demonstrate a low cost proof of concept. This was initially difficult as I had no experience in connecting mobile apps to robots, voice control, or 3D printing. I did have some experience with Arduinos and wiring since I learned that in my engineering class. It was both intimidating and really exciting getting experience with so many new tools. I did not believe I could finish getting a functional prototype, but I was able to create a prototype and print the word 'dog' on some printer paper to demonstrate its functionality using voice control. The voice control was set up on android, which I created using MIT App Inventor since that tool was ideal for rapid prototyping and had a bluetooth feature. The printer itself was designed, modeled, and 3d-printed by me and this was my favorite part since it involved a lot of creativity and hands-on prototyping. In the end, I wrote a research paper detailing the design process and formally presented it to over 100 people.",
    year: "2019",
    skills:
      "Human computer interaction, Rapid prototyping, 3D modeling with Fusion360, 3D printing, circuitry, Arduino, Research and development",
    image: project6,
  },
  {
    title: "Tumblr Themes",
    description:
      "My very first experience in web design started when I was editing my own blog in Tumblr. I enjoyed this creative outlet and quickly realized the flexibility of the design that was possible by editing the raw HTML and CSS. From there, I practiced a ton of HTML and CSS with my own blog, and soon began to develop themes. I developed about twenty themes, and ended up getting three of them published to Tumblr's official themes site which are still available today. An example is shown in the picture and can be seen at https://www.tumblr.com/theme/40258. ",
    year: "2015",
    skills: "HTML, CSS, Web design",
    image: project7,
  },
];

/* Project grid */
export function Subgrid() {
  const items = projectData.map((item) => (
    <ProjectCard
      title={item.title}
      description={item.description}
      skills={item.skills}
      image={item.image}
      year={item.year}
    />
  ));
  const half = Math.ceil(items.length / 2);

  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);
  return (
    <Container size="xl" my="md" style={{ width: "100%" }}>
      <Grid
        gutter="xl"
        gutterXs="md"
        cols={2}
        breakpoints={[{ maxWidth: "xs", cols: 1 }]}
      >
        <Grid.Col md={6} lg={6}>
          <Stack>{firstHalf}</Stack>
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
          <Stack>{secondHalf}</Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

/* Entire home page */
export function HomePageComponent({ style, title, description }) {
  const items = aboutData.map((item) => (
    <InfoCard title={item.title} description={item.description} />
  ));

  return (
    <div className="homepage-holder" style={style}>
      <div className="ho-container">
        <Title className="ho-title" content="Hello! I am Tanaya."></Title>
        {/* INTRODUCTION */}
        <SimpleGrid
          className="ho-introgrid"
          cols={3}
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
          mt="md"
        >
          {items}
        </SimpleGrid>

        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {/* PROJECTS */}
          <Heading className="ho-introtitle" content="My Projects"></Heading>
          <Badge
            style={{ marginTop: "10ex" }}
            color="dark"
            variant="filled"
            radius="xs"
          >
            Project page coming soon
          </Badge>

          <Space h="md" />
          <div className="ho-projects-holder">
            <Subgrid />
          </div>
        </Flex>
      </div>
    </div>
  );
}
