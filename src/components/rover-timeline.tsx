import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { FaRocket, FaSearch } from "react-icons/fa"; // Import icons for visual differentiation

interface Event {
  date: string;
  title: string;
  description: string;
  type: "Landing" | "Discovery";
}

const events: Event[] = [
  { date: "2004-01-04", title: "Spirit Landing", description: "Spirit landed on Mars in Gusev Crater.", type: "Landing" as "Landing" },
  { date: "2004-01-25", title: "Opportunity Landing", description: "Opportunity landed on Mars in Meridiani Planum.", type: "Landing" as "Landing" },
  { date: "2004-03-05", title: "Spirit's Discovery", description: "Spirit discovered evidence of past water in the form of rocks altered by water.", type: "Discovery" as "Discovery" },
  { date: "2004-12-13", title: "Opportunity's Discovery", description: "Opportunity found hematite, a mineral that forms in water, confirming Mars' watery past.", type: "Discovery" as "Discovery" },
  { date: "2012-08-06", title: "Curiosity Landing", description: "Curiosity landed on Mars in Gale Crater.", type: "Landing" as "Landing" },
  { date: "2013-12-09", title: "Curiosity's Discovery", description: "Curiosity detected organic molecules in ancient Martian rocks, a key ingredient for life.", type: "Discovery" as "Discovery" },
  { date: "2018-11-26", title: "InSight Landing", description: "InSight landed to study the interior of Mars.", type: "Landing" as "Landing" },
  { date: "2021-02-18", title: "Perseverance Landing", description: "Perseverance landed in Jezero Crater.", type: "Landing" as "Landing" },
  { date: "2021-02-18", title: "Ingenuity Landing", description: "Ingenuity landed on Mars attached to Perseverance.", type: "Landing" as "Landing" },
  { date: "2021-04-19", title: "Ingenuity's First Flight", description: "Ingenuity performed the first powered flight on Mars.", type: "Discovery" as "Discovery" },
  { date: "2022-09-15", title: "Perseverance's Discovery", description: "Perseverance collected rock samples with potential biosignatures in Jezero Crater.", type: "Discovery" as "Discovery" },
  { date: "2024-10-01", title: "Mars Sample Return Mission Launch", description: "NASA and ESA plan to launch the Mars Sample Return mission to retrieve rock samples collected by Perseverance.", type: "Landing" as "Landing" },
];

const RoverTimeline: React.FC = () => {
  return (
    <TimelineContainer>
      <h2>Rover Mission Timeline</h2>
      <Timeline>
        {events.map((event, index) => (
          <TimelineItem key={index} type={event.type}>
            <Dot type={event.type}>
              {event.type === "Landing" ? <FaRocket /> : <FaSearch />}
            </Dot>
            <Content>
              <Date>{event.date}</Date>
              <Title>{event.title}</Title>
              <Description>{event.description}</Description>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineContainer>
  );
};

export default RoverTimeline;

/** Styled Components */
const TimelineContainer = styled.div({
  padding: "30px",
  backgroundColor: colors.secondary,
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
  h2: {
    fontSize: "2em",
    color: colors.text,
    marginBottom: "20px",
  },
});

const Timeline = styled.div({
  position: "relative",
  margin: "20px 0",
  padding: "0 20px",
  borderLeft: `4px solid ${colors.accent}`,
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

const TimelineItem = styled.div<{ type: "Landing" | "Discovery" }>(({ type }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingLeft: "40px",
  animation: "fadeIn 0.5s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  borderLeft: type === "Landing" ? `4px solid ${colors.accent}` : `4px solid ${colors.orange.light}`,
}));

const Dot = styled.div<{ type: string }>(({ type }) => ({
  position: "absolute",
  left: "-10px",
  width: "30px",
  height: "30px",
  backgroundColor: type === "Landing" ? colors.accent : colors.orange.light,
  borderRadius: "50%",
  border: `3px solid ${colors.background}`,
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.background,
  fontSize: "1.2em",
}));

const Content = styled.div({
  backgroundColor: colors.background,
  padding: "15px 20px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  flex: 1,
});

const Date = styled.div({
  fontSize: "0.9em",
  fontWeight: "bold",
  color: colors.textSecondary,
  marginBottom: "5px",
});

const Title = styled.h3({
  margin: "0 0 5px",
  fontSize: "1.4em",
  color: colors.text,
});

const Description = styled.p({
  margin: 0,
  fontSize: "1em",
  color: colors.textSecondary,
});
