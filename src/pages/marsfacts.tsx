import React from "react";
import { Layout } from "../components";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { FaPalette, FaThermometerHalf, FaCloud, FaWeight, FaClock, FaMountain, FaGripLines, FaWater, FaMoon } from "react-icons/fa";

const MarsFacts: React.FC = () => {
  const facts = [
    { title: "Color", description: "Its reddish color is due to the presence of iron oxide (rust) on its surface.", icon: <FaPalette /> },
    { title: "Temperature", description: "Temperatures range from -125°C at the poles to 20°C at the equator during summer.", icon: <FaThermometerHalf /> },
    { title: "Atmosphere", description: "Its thin atmosphere is composed primarily of carbon dioxide (95%).", icon: <FaCloud /> },
    { title: "Gravity", description: "Gravity on Mars is approximately 38% of Earth's gravity.", icon: <FaWeight /> },
    { title: "Day Length", description: "A Martian day (sol) lasts 24 hours and 37 minutes.", icon: <FaClock /> },
    { title: "Tallest Mountain", description: "Olympus Mons, the largest volcano in the solar system, stands 21 km tall.", icon: <FaMountain /> },
    { title: "Longest Canyon", description: "Valles Marineris stretches over 4,000 km.", icon: <FaGripLines /> },
    { title: "Water Evidence", description: "Mars has polar ice caps and evidence suggests liquid water once flowed on its surface.", icon: <FaWater /> },
    { title: "Moons", description: "Mars has two small moons, Phobos and Deimos, thought to be captured asteroids.", icon: <FaMoon /> },
  ];

  return (
    <Layout>
      <FactsContainer>
        <h1>Explore Mars Facts</h1>
        <FactsGrid>
          {facts.map((fact, index) => (
            <FactCard key={index}>
              <IconContainer>{fact.icon}</IconContainer>
              <FactTitle>{fact.title}</FactTitle>
              <FactDescription>{fact.description}</FactDescription>
            </FactCard>
          ))}
        </FactsGrid>
      </FactsContainer>
    </Layout>
  );
};

export default MarsFacts;

/** Styled Components */
const FactsContainer = styled.div({
  padding: "40px 20px",
  backgroundColor: colors.secondary,
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  maxWidth: "1200px",
  margin: "40px auto",
  textAlign: "center",
  h1: {
    color: colors.text, // Updated to match the header's color
    marginBottom: "30px",
    fontSize: "2.5em",
  },
});

const FactsGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
});

const FactCard = styled.div({
  backgroundColor: colors.background,
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const IconContainer = styled.div({
  fontSize: "2em",
  color: colors.accent,
  marginBottom: "10px",
});

const FactTitle = styled.h2({
  fontSize: "1.5em",
  color: colors.text,
  marginBottom: "10px",
});

const FactDescription = styled.p({
  fontSize: "1em",
  color: colors.textSecondary,
});
