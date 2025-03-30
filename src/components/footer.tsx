import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <LogoContainer>
          <img src="/logo512.png" alt="Logo" width="80" height="80" />
        </LogoContainer>
      </LogoSection>
      <InfoSection>
        <FooterText>
        {new Date().getFullYear()} © Developed by DaniDev
        </FooterText>
        <IconContainer>
          <a href="https://www.linkedin.com/in/daniel-herranz-fern%C3%A1ndez-b4650511b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ marginRight: 10, color: '#555' }} />
          </a>
          <a href="https://github.com/dherranzf" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ color: '#555' }} />
          </a>
        </IconContainer>
      </InfoSection>
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'column', // Stack sections vertically
  justifyContent: 'space-between', // Add space between sections
  alignItems: 'center',
  color: '#b87333', // Mars-like copper tone
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: '#FFFFFF', // Changed to white
  borderTop: `solid 1px #d2b48c`, // Mars-like light tan tone
});

const InfoSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
});

const LogoSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'flex-start', // Align at the top of the section
  marginBottom: 5, // Add spacing below the logo section
});

const IconContainer = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'row',
  a: {
    textDecoration: 'none',
    svg: {
      fontSize: '2em', // Increase icon size
    },
  },
});

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  svg: {
    height: 40,
  },
});

const FooterText = styled.div({
  fontSize: "0.9em",
  color: "#b87333", // Match the initial date color
  a: {
    color: "#555", // Formal and subtle link color
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});
