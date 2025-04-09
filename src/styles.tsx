import React from 'react';
import '@apollo/space-kit/reset.css';
import { colors as SKColors } from '@apollo/space-kit/colors';
import { Global, ThemeProvider } from '@emotion/react';
import { motion } from 'framer-motion';

declare module '@emotion/react' {
  export interface Theme {
    background: string;
    secondary: string;
    accent: string;
    text: string;
    textSecondary: string;
  }
}

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800,
};


export const darkTheme: Theme = {
  background: "#0D171C", // Darker Mars-inspired background
  secondary: "#1A2E3A",  // Lighter tone for containers
  accent: "#F26D3F",     // Bold orange highlight
  text: "#F5F2F0",       // Light neutral text
  textSecondary: "#F5C6A5",
};

export const lightTheme: Theme = {
  primary: '#D2B48C', // Soft tan
  secondary: '#FDEDDF', // Orange beige
  accent: '#b87333', // Mars-like copper tone
  background: '#FEF6EF', // Almost white
  text: '#333333', // Dark gray
  textSecondary: '#666666', // Medium gray
};

export const GlobalStyles = ({ theme }: { theme: Theme }) => (
  <Global
    styles={{
      html: {
        height: '100%',
      },
      body: {
        margin: 0,
        height: '100%',
        padding: 0,
        fontFamily: "'Source Sans Pro', sans-serif",
        backgroundColor: theme.background,
        color: theme.text,
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: theme.background,
        backgroundPosition: 'center',
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
          url("/mars_surface_pattern.png")
        `,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',        
      },
      '*': {
        boxSizing: 'border-box',
      },
      [['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].join(',')]: {
        margin: 0,
        fontWeight: 600,
      },
      h1: {
        fontSize: 40,
        lineHeight: 1,
        '@media (max-width: 768px)': {
          fontSize: 30,
        },
      },
      h2: {
        fontSize: 36,
        '@media (max-width: 768px)': {
          fontSize: 28,
        },
      },
      h3: {
        fontSize: 30,
      },
      h5: {
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 4,
      },
      button: {
        padding: '10px 20px',
        borderRadius: '30px',
        border: 'none',
        backgroundColor: theme.accent,
        color: '#fff',
        fontSize: '1em',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        },
      },
    }}
  />
);

export const MotionButton = motion.button;

export default GlobalStyles;

export { IconRun } from '@apollo/space-kit/icons/IconRun';
export { IconView } from '@apollo/space-kit/icons/IconView';
export { IconTime } from '@apollo/space-kit/icons/IconTime';
export { IconBook } from '@apollo/space-kit/icons/IconBook';
export { IconYoutube } from '@apollo/space-kit/icons/IconYoutube';
export { IconArrowRight } from '@apollo/space-kit/icons/IconArrowRight';
export { IconDoubleArrowRight } from '@apollo/space-kit/icons/IconDoubleArrowRight';
export { ApolloIcon } from '@apollo/space-kit/icons/ApolloIcon';
export { Button } from '@apollo/space-kit/Button';
export { ThemeProvider };