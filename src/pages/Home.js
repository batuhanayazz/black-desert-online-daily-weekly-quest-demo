import React from "react";
import styled from "styled-components";

// Styled components for CSS-in-JS
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const FeatureItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const AboutSection = styled.section`
  background-color: #333;
  padding: 40px;
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const AboutParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
`;

const Main = styled.main`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
`;

const Button = styled`
  background-color: #e3b653;
  color: #222;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c4971f;
  }
`;

const Home = () => {
  return (
    <Container>
      <Section>
        <Main>
          <Heading>Welcome to BDO Quest Tracker</Heading>
          <Paragraph>
            Track your daily and weekly quests in Black Desert Online easily
            with our quest tracker app.
          </Paragraph>
          <Button to="/quests">Get Started</Button>
        </Main>
      </Section>

      <Section>
        <Heading>Features</Heading>
        <FeatureList>
          <FeatureItem>Track daily quests</FeatureItem>
          <FeatureItem>Monitor weekly objectives</FeatureItem>
          <FeatureItem>Customize quest notifications</FeatureItem>
          <FeatureItem>Explore quest guides and tips</FeatureItem>
        </FeatureList>
      </Section>

      <AboutSection>
        <AboutHeading>About Us</AboutHeading>
        <AboutParagraph>
          We are dedicated to providing the best tools for the Black Desert
          Online community to enhance your gaming experience.
        </AboutParagraph>
      </AboutSection>
    </Container>
  );
};

export default Home;
