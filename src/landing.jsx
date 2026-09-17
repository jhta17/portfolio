import {
  Container,
  Transition,
  Text,
  Button,
  Stack,
  MantineProvider,
  Grid,
} from "@mantine/core";
import { HomePageComponent } from "./HomePage";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  const [showLanding, setLanding] = useState(true);
  const onClick = () => {
    /* optional event hook */
    setLanding(false);
    document.body.style.overflow = "visible";
  };
  const scaleY = {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity",
  };
  return (
    <ThemeProvider>
      {showLanding ? (
        <div className="app-holder">
          <HomePageComponent
            style={{ transform: "scale(1.2)", opacity: 0 }}
          ></HomePageComponent>
          <Container className="la-background" fluid={true}>
            <Container className="la-container" fluid={true}>
              <Stack
                justify="center"
                align="center"
                className="la-grid"
                col={2}
              >
                <Grid className="la-title-holder" grow>
                  <div className="la-title">t</div>
                  <div className="la-title">a</div>
                  <div className="la-title">n</div>
                  <div className="la-title">a</div>
                  <div className="la-title">y</div>
                  <div className="la-title">a</div>
                </Grid>
                <Button
                  onClick={onClick}
                  className="la-enter-button"
                  fullWidth
                  variant="outline"
                >
                  View Paper
                </Button>
              </Stack>
            </Container>
          </Container>
        </div>
      ) : (
        <div className="app-holder">
          <HomePageComponent
            style={{ transform: "scale(1)", opacity: 1 }}
          ></HomePageComponent>
          <Container
            style={{ zIndex: "-999", opacity: "0" }}
            className="la-background"
            fluid={true}
          >
            <Container className="la-container" fluid={true}>
              <Stack
                justify="center"
                align="center"
                className="la-grid"
                col={2}
              >
                <div
                  style={{
                    transform: "scale(0.6)",
                  }}
                  className="la-image-holder"
                >
                  <img
                    className="la-image"
                    src="./skeleton-removebg-preview.png"
                  />
                </div>
                <Grid
                  style={{
                    transform: "scale(0.6)",
                  }}
                  className="la-title-holder"
                  grow
                >
                  <div className="la-title">t</div>
                  <div className="la-title">a</div>
                  <div className="la-title">n</div>
                  <div className="la-title">a</div>
                  <div className="la-title">y</div>
                  <div className="la-title">a</div>
                </Grid>
                <Button
                  style={{
                    transform: "scale(0.6)",
                  }}
                  onClick={onClick}
                  className="la-enter-button"
                  fullWidth
                  variant="outline"
                >
                  View Portfolio
                </Button>
              </Stack>
            </Container>
          </Container>
        </div>
      )}
    </ThemeProvider>
  );
}
