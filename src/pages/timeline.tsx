import React from "react";
import { Layout, RoverTimeline } from "../components";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../styles";

const TimelinePage: React.FC = () => {
  return (
    <Layout>
      <BackButton to="/">← Back to Home</BackButton>
      <InteractiveTimeline>
        <RoverTimeline />
      </InteractiveTimeline>
    </Layout>
  );
};

export default TimelinePage;

/** Styled Components */
const BackButton = styled(Link)({
  display: "inline-block",
  margin: "20px 0",
  padding: "10px 15px",
  backgroundColor: colors.background,
  color: colors.text,
  textDecoration: "none",
  borderRadius: "5px",
  border: `1px solid ${colors.textSecondary}`,
  fontWeight: "bold",
  ":hover": {
    backgroundColor: colors.accent,
  },
});

const InteractiveTimeline = styled.div({
  position: "relative",
  padding: "20px",
  backgroundColor: colors.secondary,
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.02)",
  },
});
