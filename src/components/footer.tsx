import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import framer-motion

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
        {new Date().getFullYear()} © Developed by dherranzf
        </FooterText>
        <IconContainer>
          <MotionIcon
            href="https://www.linkedin.com/in/daniel-herranz-fern%C3%A1ndez-b4650511b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: colors.accent }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </MotionIcon>
          <MotionIcon
            href="https://github.com/dherranzf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: colors.accent }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </MotionIcon>
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
  color: colors.text, // Mars-like copper tone
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: colors.secondary, // Changed to white
  borderTop: `solid 1px ${colors.textSecondary}`, // Mars-like light tan tone
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
  gap: '15px', // Add spacing between icons
});

const MotionIcon = motion(styled.a({
  textDecoration: 'none',
  svg: {
    fontSize: '2em',
    color: colors.textSecondary, // Set default color to colors.text
    transition: 'transform 0.5s ease, color 0.5s ease',
  },
}));

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  svg: {
    height: 40,
    color: colors.textSecondary, // Revert to the original color
  },
});

const FooterText = styled.div({
  fontSize: "0.9em",
  color: colors.textSecondary, // Match the initial date color
  a: {
    color: colors.textSecondary, // Formal and subtle link color
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});
