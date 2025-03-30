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
  backgroundColor: colors.secondary, // Updated to Mars-like tone
  borderRadius: 8,
  overflow: 'hidden', // Prevents overflow
  position: 'relative', // Ensures child elements are positioned correctly
  display: 'flex', // Aligns elements properly
  flexDirection: 'column', // Arranges elements in a column
  alignItems: 'stretch', // Ensures children occupy full width
});

const CoverImage = styled.img({
  width: '100%',
  borderRadius: 8,
  marginBottom: 20,
});

const RoverDetails = styled.div({
  marginTop: 20,
  padding: 20,
  backgroundColor: colors.background,
  borderRadius: 8,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%', // Ensures it stays within the container
  boxSizing: 'border-box', // Includes padding and border in width calculation
  flexShrink: 0, // Prevents the element from shrinking
});

const RoverImage = styled.img({
  width: '100%',
  maxWidth: 300,
  borderRadius: 8,
  marginBottom: 20,
});
