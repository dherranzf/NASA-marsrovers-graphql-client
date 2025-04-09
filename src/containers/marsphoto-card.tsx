import React from "react";
import styled from "@emotion/styled";
import { mq } from "../styles";
import { humanReadableTimeFromSeconds } from "../utils/helpers";
import { Link } from "react-router-dom";
import type { MarsPhoto } from "../__generated__/graphql";
import { useMutation } from "@apollo/client";
import { gql } from "../__generated__";
import { FaCamera } from "react-icons/fa"; // Import the camera icon from react-icons

/**
 * Mutation to increment a marsPhotos's number of views
 */
const INCREMENT_MARSPHOTO_VIEWS = gql(`
  mutation IncrementMarsPhotoViews($incrementMarsPhotoViewsId: ID!) {
    incrementMarsPhotoViews(id: $incrementMarsPhotoViewsId) {
      code
      success
      message
      marsPhoto {
        id
        number_of_views
      }
    }
  }
`);

interface MarsPhotoCardProps {
  marsPhoto: Omit<MarsPhoto, "modules">;
  linkTo: string; // New prop for the link destination
}

/**
 * MarsPhoto Card component renders basic info in a card format
 * for each mars photo populating the grid homepage.
 */
const MarsPhotoCard: React.FC<MarsPhotoCardProps> = ({ marsPhoto, linkTo }) => {
  const { sol, img_src, rover, id, earth_date } = marsPhoto;

  const [incrementMarsPhotoViews] = useMutation(INCREMENT_MARSPHOTO_VIEWS, {
    variables: { incrementMarsPhotoViewsId: id },
    // to observe what the mutation response returns
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <CardContainer to={linkTo} onClick={() => incrementMarsPhotoViews()}>
      <CardContent>
        <CardImageContainer>
          <CardImage src={img_src || ""} alt={id} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>
            <FaCamera size={20} /> {/* Remove the color prop */}
            {id} - {" "} sol {sol}
          </CardTitle>
          <CardFooter>
            <RoverImage src="/rover-curiosity.jpg" alt={`Image of Rover ${rover.name}`} />
            <RoverAndMarsPhoto>
              <RoverName>Rover {rover.name}</RoverName>
              <MarsPhotoLength>
                {rover.landing_date} - {" "} {rover.status}
              </MarsPhotoLength>
            </RoverAndMarsPhoto>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default MarsPhotoCard;

/** MarsPhoto Card styled components */
const CardContainer = styled(Link)(({ theme }) => ({
  borderRadius: 12, // Slightly more rounded corners
  color: theme.text,
  backgroundSize: "cover",
  backgroundColor: theme.secondary,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "300px",
  height: 380,
  margin: "10px auto",
  overflow: "hidden",
  position: "relative",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease", // Add color transition
  ":hover": {
    transform: "scale(1.05)", // Slightly enlarge on hover
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
    color: theme.accent, // Change text and icon color on hover
    h3: { // Target CardTitle
      color: theme.accent,
    },
    svg: { // Target CameraIcon
      color: theme.accent,
    },
  },
  cursor: "pointer",
  textDecoration: "none",
}));

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
});

const CardTitle = styled.h3(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 700,
  color: theme.text,
  flex: 1,
  display: "flex", // Add flex to align icon and text
  alignItems: "center",
  justifyContent: "center",
  gap: "8px", // Add spacing between icon and text
  svg: { // Ensure the icon inherits the text color
    transition: "color 0.3s ease", // Smooth transition for color change
  },
}));

const CardImageContainer = styled.div({
  height: 220,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(255,255,255,0.20)", // Changed to white overlay with reduced opacity
  },
});

const CardImage = styled.img({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  filter: "sepia(50%) hue-rotate(-20deg) saturate(150%)", // Mars-like tone
});

const CardBody = styled.div(({ theme }) => ({
  padding: 18,
  flex: 1,
  display: "flex",
  color: theme.textSecondary, // Updated to Mars-like text color
  flexDirection: "column",
  justifyContent: "space-around",
}));

const CardFooter = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

const RoverImage = styled.img({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const RoverAndMarsPhoto = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const RoverName = styled.div(({ theme }) => ({
  lineHeight: "1em",
  fontSize: "1.1em",
  color: theme.textSecondary,
}));

const MarsPhotoLength = styled.div(({ theme }) => ({
  fontSize: "0.8em",
  color: theme.textSecondary,
}));
