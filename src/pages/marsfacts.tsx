import React from "react";
import { Layout } from "../components";
import styled from "@emotion/styled";
import { colors } from "../styles";

const MarsFacts: React.FC = () => {
  return (
    <Layout>
      <FactsContainer>
        <h1>Interesting Facts and Features of Mars</h1>
        <p>
          Mars, known as the "Red Planet," is the fourth planet from the Sun and the second smallest in the solar system.
        </p>
        <ul>
          <li>
            <strong>Color:</strong> Its reddish color is due to the presence of iron oxide (rust) on its surface.
          </li>
          <li>
            <strong>Temperature:</strong> Temperatures on Mars can range from -125°C at the poles to 20°C at the equator during summer.
          </li>
          <li>
            <strong>Atmosphere:</strong> Its thin atmosphere is composed primarily of carbon dioxide (95%).
          </li>
          <li>
            <strong>Gravity:</strong> Gravity on Mars is approximately 38% of Earth's gravity.
          </li>
          <li>
            <strong>Day Length:</strong> A Martian day (sol) lasts 24 hours and 37 minutes.
          </li>
          <li>
            <strong>Tallest Mountain:</strong> Olympus Mons, the largest volcano in the solar system, stands 21 km tall.
          </li>
          <li>
            <strong>Longest Canyon:</strong> Valles Marineris, a canyon system that stretches over 4,000 km.
          </li>
          <li>
            <strong>Water Evidence:</strong> Mars has polar ice caps made of water and dry ice (frozen CO₂), and evidence suggests liquid water once flowed on its surface.
          </li>
          <li>
            <strong>Moons:</strong> Mars has two small moons, Phobos and Deimos, which are thought to be captured asteroids.
          </li>
        </ul>
        <p>
          Mars has been the focus of numerous space missions and remains a key target for the search for life and future human colonization.
        </p>
      </FactsContainer>
    </Layout>
  );
};

export default MarsFacts;

/** Styled Components */
const FactsContainer = styled.div({
  padding: "20px",
  backgroundColor: colors.secondary,
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  margin: "40px auto",
  color: colors.text,
  h1: {
    color: colors.accent,
    marginBottom: "20px",
  },
  ul: {
    marginTop: "10px",
    paddingLeft: "20px",
    li: {
      marginBottom: "10px",
    },
  },
});
