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
import { Title, InfoCard, Heading, ProjectCard } from "./GlobalComponents";
import spotifyprojectimg from "./projectpics/spotify.PNG";
import project1 from "./projectpics/technicafellowship.PNG";
import project2 from "./projectpics/colorpaletteproj.PNG";
import project3 from "./projectpics/centroidredesign.PNG";
import project4 from "./projectpics/testudoredesignproj.PNG";
import project5 from "./projectpics/covidratesmapproj.PNG";
import project6 from "./projectpics/label.jpg";
import project7 from "./projectpics/Pthemes3.PNG";

const projectData = [
  {
    title:
      "Understanding the fundamentals of machine learning through Spotify's Web API",
    description: `The Spotify Web API used to be much more fully featured, allowing access to various data points such as danceability, energy, and tempo that made for good features to use for a custom classifier. This project was a fun way learn core machine learning concepts such as feature engineering and common algorithms. In the project, I pulled this data using the api, transformed and formatted it in a way that was disgestible for various keras models to train on, and then analyzed the output of the trained machine learning models to understand how they work on the same data. A full analysis is available ${(
      <a> here</a>
    )}`,
    skills: "Python, Tensorflow, Pandas, Numpy, Web API's, Visualizations",
    image: spotifyprojectimg,
  },
  {
    title: "Teaching web development",
    year: "2022",
    skills: "Teaching, HTML/CSS, Web-development",
    description:
      "As a part of the organizing team for Technica, a large hackathon, I taught a fellowship program for a cohort of 15 students from various highschools. Each student learned HTML, CSS, and Javascript and were able to employ their skills in their very own personal portfolio website. Each student had full creative control over their website, and demo'd their final project at the end of the program. Pictured above is the example I made to guide them through this. ",
    image: project1,
  },
  {
    title: "Envisioning a new software for instructors",
    description:
      "A company I tutored for used a complex, outdated system to track each student and their tutoring sessions. This system was a numerous forms on multiple tabs of a website that needed to be filled out for every student, with outdated fields. Since I recently learned Adobe XD, I worked with my manager to envision a better system, and decided to prototype a more efficient version of my job's current workflow. Above is the resulting application that lets you search for and add new student tracking cards as they come, and fill out the necessary information in a quick manner.",
    year: "2021",
    skills: "Adobe XD, User experience design, Product design",
    image: project3,
  },
  {
    title: "Color Palette Grid Generator",
    description:
      "I decided to make during winter break that would organize the colors across a grid so that I may visualize them better. Since I had been wanting to learn React for a long time, this was the perfect opportunity for me to do so. After taking a short online React course, I built the user interface shown above and programmed it so it shuffled a given color palette across a grid. It was my first time working with React and a fun way to pick up core concepts such as stateful components, hooks, and the render cycle.",
    year: "2020",
    skills: "React, Javascript, Figma, HTML/CSS, User interface design",
    image: project2,
  },
  {
    title: "Redesigning the world's oldest online course catalog ",
    description:
      "In my Introduction to Design Cultures and Creativity class, I was introduced to a program called Adobe XD. For a project to redesign a frustrating UX, I chose our school's course registration system. Currently, the design is outdated and made in the early 2000's, with one site to register on, one site to view courses available, and a third site to check your waitlist status. This did not make much sense to me, so in my redesign, I focused on combining all of the relevant tasks for course registration into one web application. In this reimagination, students can browse courses, select relevant ones to view on their schedule, and directly register from the same application. Since many students prefer to build their schedule to their liking before finalizing their decisions, the ability to pre-visualize a schedule before registering allows a much faster way to understand what courses would fit in a schedule. ",
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
    title: "Tumblr Themes: How it all started",
    description:
      "My interest in programming sparked through building themes for Tumblr users. The creative flexibility I had discovered through editing the HTML/CSS of my blog led to a love for theme-making. I developed about twenty themes, and ended up getting three of them published to Tumblr's official themes site which are still available today. An example is shown in the picture and can be seen at https://www.tumblr.com/theme/40258. ",
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
      key={item.title}
    />
  ));
  const half = Math.ceil(items.length / 2);

  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);
  return (
    <Container className="articles" size="xl" my="md" style={{ width: "100%" }}>
      <Grid gutter="xl" cols={2} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
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
  return (
    <div className="homepage-holder" style={style}>
      <div className="ho-container">
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {/* PROJECTS */}
          <Heading className="ho-introtitle" content="Tanaya Jha"></Heading>
          <div id="description">
            <span className="ho-subheading-2">Software Engineer ✩</span>
            <span className="ho-subheading-2"> University of Maryland ✩</span>
            <span className="ho-subheading-2">
              data-driven decisions, human psychology, and programming systems
            </span>
          </div>
          <div id="subdesc">
            <span className="ho-subheading">Past Project Column</span>
            <span className="ho-subheading2">
              A hand-coded archive of personal projects I have done.
            </span>
          </div>
          <Space h="md" />
          <div className="ho-projects-holder">
            <Subgrid />
          </div>
        </Flex>
      </div>
    </div>
  );
}
