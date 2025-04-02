import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import { humanReadableTimeFromSeconds } from '../utils/helpers';

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
        <h2>Rover Details</h2>
        <RoverImage src="/rover-curiosity.jpg" alt={`Image of Rover ${rover.name}`} />
        <p>Name: {rover.name}</p>
        <p>Landing Date: {rover.landing_date}</p>
        <p>Launch Date: {rover.launch_date}</p>
        <p>Status: {rover.status}</p>
      </RoverDetails>
    </DetailContainer>
  );
};

export default MarsPhotoDetail;

/** Styled Components */
const DetailContainer = styled.div({
  padding: 20,
  backgroundColor: colors.secondary,
  borderRadius: 8,
  overflowY: 'auto', // Allows vertical scrolling if the content is too large
  maxHeight: 'calc(100vh - 40px)', // Limits the maximum height to 100% of the viewport minus a margin
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const CoverImage = styled.img({
  width: '100%', // Use the full width of the container
  maxHeight: '70vh', // Limit the height to 70% of the viewport height
  objectFit: 'contain', // Ensure the entire image is visible without cropping
  borderRadius: 8,
  marginBottom: 20,
});

const RoverDetails = styled.div({
  marginTop: 20,
  padding: 20,
  backgroundColor: colors.background,
  borderRadius: 8,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  boxSizing: 'border-box',
});

const RoverImage = styled.img({
  width: '100%',
  maxWidth: 300,
  borderRadius: 8,
  marginBottom: 20,
});
