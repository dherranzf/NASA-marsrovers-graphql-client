import React from 'react';
import styled from '@emotion/styled';

const MarsPhotoDetail: React.FC<{ marsPhoto: any }> = ({ marsPhoto }) => {
  const {
    id,
    sol,
    img_src,
    rover = { name: '', landing_date: '', launch_date: '', status: '', img_src: '' },
    earth_date,
number_of_views,
    camera = { full_name: '', name: '' },
  } = marsPhoto ?? {};

  return (
    <DetailContainer>
      <CoverImage src={img_src ?? ''} alt={`Mars Photo ${id}`} />
      <h2>Mars photo {id}</h2>
      <p>Martian Day: {sol}</p>
      <p>Earth Date: {earth_date}</p>
      <p>Rover: {rover.name}</p>
      <p>Camera: {camera.full_name}</p>
      <RoverDetails>
        <RoverImage src="/rover-curiosity.jpg" alt={`Image of Rover ${rover.name}`} />
        <div>
          <h2>Rover Details</h2>
          <p>Name: {rover.name}</p>
          <p>Landing Date: {rover.landing_date}</p>
          <p>Launch Date: {rover.launch_date}</p>
          <p>Status: {rover.status}</p>
        </div>
      </RoverDetails>
    </DetailContainer>
  );
};

export default MarsPhotoDetail;

/** Styled Components */
const DetailContainer = styled.div(({ theme }) => ({
  padding: 20,
  backgroundColor: theme.secondary,
  borderRadius: 8,
  overflowY: 'auto', // Allows vertical scrolling if the content is too large
  maxHeight: 'calc(100vh - 40px)', // Limits the maximum height to 100% of the viewport minus a margin
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  p: {
    color: theme.textSecondary, // Set text color for <p> elements
  },
}));

const CoverImage = styled.img({
  width: '100%', // Use the full width of the container
  maxHeight: '70vh', // Limit the height to 70% of the viewport height
  objectFit: 'contain', // Ensure the entire image is visible without cropping
  borderRadius: 8,
  marginBottom: 20,
});

const RoverDetails = styled.div(({ theme }) => ({
  marginTop: 20,
  padding: 20,
  backgroundColor: theme.background,
  borderRadius: 8,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex', // Use flex layout
  gap: 20, // Add spacing between the image and text
  alignItems: 'flex-start', // Align items at the top
  flexDirection: 'row', // Default layout: image and text side by side
  '@media (max-width: 768px)': {
    flexDirection: 'column', // Stack image and text vertically on small screens
    alignItems: 'center', // Center align items on small screens
  },
  h2: {
    marginTop: 0, // Ensure the heading aligns properly
  },
  p: {
    margin: 0, // Remove default margin for <p> elements
  },
  '> div': { // Target the text container
    display: 'flex',
    flexDirection: 'column', // Stack text elements vertically
    gap: 15, // Add more spacing between <p> elements
  },
}));

const RoverImage = styled.img({
  width: '100%',
  maxWidth: 300,
  borderRadius: 8,
  marginBottom: 20,
});
