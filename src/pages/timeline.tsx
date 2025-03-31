import React from "react";
import { Layout } from "../components";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { FaRocket, FaSearch } from "react-icons/fa";

const events = [
  { date: "2004-01-04", title: "Spirit Landing", description: "Spirit landed on Mars in Gusev Crater.", type: "Landing" },
  { date: "2004-01-25", title: "Opportunity Landing", description: "Opportunity landed on Mars in Meridiani Planum.", type: "Landing" },
  { date: "2004-03-05", title: "Spirit's Discovery", description: "Spirit discovered evidence of past water in the form of rocks altered by water.", type: "Discovery" },
  { date: "2004-12-13", title: "Opportunity's Discovery", description: "Opportunity found hematite, a mineral that forms in water, confirming Mars' watery past.", type: "Discovery" },
  { date: "2012-08-06", title: "Curiosity Landing", description: "Curiosity landed on Mars in Gale Crater.", type: "Landing" },
  { date: "2013-12-09", title: "Curiosity's Discovery", description: "Curiosity detected organic molecules in ancient Martian rocks, a key ingredient for life.", type: "Discovery" },
  { date: "2018-11-26", title: "InSight Landing", description: "InSight landed to study the interior of Mars.", type: "Landing" },
  { date: "2021-02-18", title: "Perseverance Landing", description: "Perseverance landed in Jezero Crater.", type: "Landing" },
  { date: "2021-02-18", title: "Ingenuity Landing", description: "Ingenuity landed on Mars attached to Perseverance.", type: "Landing" },
  { date: "2021-04-19", title: "Ingenuity's First Flight", description: "Ingenuity performed the first powered flight on Mars.", type: "Discovery" },
  { date: "2022-09-15", title: "Perseverance's Discovery", description: "Perseverance collected rock samples with potential biosignatures in Jezero Crater.", type: "Discovery" },
  { date: "2024-10-01", title: "Mars Sample Return Mission Launch", description: "NASA and ESA plan to launch the Mars Sample Return mission to retrieve rock samples collected by Perseverance.", type: "Landing" },
];

const TimelinePage: React.FC = () => {
  return (
    <Layout>
      <TimelineContainer>
        <h1>Mars Rover Mission Timeline</h1>
        <Timeline>
          {events.map((event, index) => (
            <TimelineEvent key={index} type={event.type}>
              <IconContainer>
                {event.type === "Landing" ? <FaRocket /> : <FaSearch />}
              </IconContainer>
              <EventContent>
                <EventDate>{event.date}</EventDate>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
              </EventContent>
            </TimelineEvent>
          ))}
        </Timeline>
      </TimelineContainer>
    </Layout>
  );
};

export default TimelinePage;

/** Styled Components */
const TimelineContainer = styled.div({
  padding: "50px 20px",
  backgroundColor: colors.secondary,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  color: colors.text,
  maxWidth: "1100px",
  margin: "0 auto",
  h1: {
    fontSize: "2.5em",
    marginBottom: "30px",
    color: colors.text, // Updated to match the header's color
  },
});

const Timeline = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  width: "100%",
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    left: "20px",
    top: 0,
    bottom: 0,
    width: "4px",
    background: colors.accent,
  },
});

const TimelineEvent = styled.div<{ type: string }>(({ type }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "20px",
  position: "relative",
  padding: "20px",
  backgroundColor: colors.background,
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  marginLeft: "50px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
  },
  "::before": {
    content: '""',
    position: "absolute",
    left: "-30px",
    top: "20px",
    width: "20px",
    height: "20px",
    background: type === "Landing" ? colors.accent : colors.orange.light,
    borderRadius: "50%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
}));

const IconContainer = styled.div({
  fontSize: "1.5em",
  color: colors.text,
  backgroundColor: colors.secondary,
  padding: "10px",
  borderRadius: "50%",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
});

const EventContent = styled.div({
  textAlign: "left",
  color: colors.text,
});

const EventDate = styled.div({
  fontSize: "0.9em",
  fontWeight: "bold",
  marginBottom: "5px",
  color: colors.textSecondary,
});

const EventTitle = styled.h2({
  fontSize: "1.5em",
  marginBottom: "10px",
  color: colors.text,
});

const EventDescription = styled.p({
  fontSize: "1em",
  lineHeight: "1.5",
  color: colors.textSecondary,
});
