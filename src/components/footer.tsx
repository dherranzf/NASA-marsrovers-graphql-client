import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // Importa el contexto del tema

/**
 * Footer is a component to make the app look more complete.
 */
const Footer = () => {
  const { isDarkMode } = useTheme(); // Obtén el estado del tema
  const accentColor = isDarkMode ? "#F26D3F" : "#b87333"; // Define el color según el tema

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
            whileHover={{ scale: 1.2, color: accentColor }} // Usa un valor estático para color
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </MotionIcon>
          <MotionIcon
            href="https://github.com/dherranzf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: accentColor }} // Usa un valor estático para color
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
const FooterContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.secondary,
  color: theme.text,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 30,
  height: 200,
  padding: 20,
  borderTop: `solid 1px ${theme.textSecondary}`,
}));

const InfoSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const LogoSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 5,
});

const IconContainer = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
});

const MotionIcon = motion(styled.a(({ theme }) => ({
  textDecoration: 'none',
  svg: {
    fontSize: '2em',
    color: theme.textSecondary,
    transition: 'transform 0.5s ease, color 0.5s ease',
  },
})));

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
});

const FooterText = styled.div(({ theme }) => ({
  fontSize: "0.9em",
  color: theme.textSecondary,
  a: {
    color: theme.textSecondary,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
}));
