import React, { PropsWithChildren } from 'react';
import { colors, widths } from '../styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion
import logo from '/logo512.png';

/**
 * Header displays the top navigation bar.
 * Contains a button to return to the homepage.
 */
const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
              <Title>
                <h3>NASA Mars Rovers</h3>
                <div>Explore the latest photos from the Mars rovers</div>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        <NavButtons>
          {['Rover\'s Photos', 'Missions Timeline', 'Mars Facts'].map((text, index) => (
            <NavLink
              key={index}
              to={index === 0 ? '/' : index === 1 ? '/timeline' : '/marsfacts'}
              whileHover={{ scale: 1.1, color: colors.accent }}
              whileTap={{ scale: 0.95 }}
            >
              {text}
            </NavLink>
          ))}
        </NavButtons>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Styled Components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `solid 1px ${colors.textSecondary}`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '10px 30px',
  minHeight: 80,
  backgroundColor: colors.secondary,
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px 15px',
  },
});


const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%', // Ensure the container takes the full width
  maxWidth: `${widths.regularPageWidth}px`, // Limit the maximum width
  margin: '0 auto', // Center the container within the header
  flexWrap: 'wrap', // Allow wrapping of child elements if needed
  '@media (max-width: 768px)': {
    flexDirection: 'column', // Stack elements vertically on small screens
    alignItems: 'flex-start', // Align items to the start
  },
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  flex: 1,
  maxWidth: '1100px',
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  color: colors.text,
  alignItems: 'center',
  ':hover': {
    color: colors.textSecondary,
  },
});

const LogoContainer = styled.div({ display: 'flex', alignSelf: 'center' });

const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8,
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
    color: colors.accent,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
    color: colors.accent,
  },
});

const NavButtons = styled.div({
  display: 'flex',
  gap: '20px',
  marginLeft: 'auto',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '10px',
    marginLeft: 0,
    width: '100%',
  },
});

const NavLink = motion(styled(Link)({
  textDecoration: 'none',
  color: colors.text,
  fontSize: '1em',
  fontWeight: 'bold',
  padding: '10px 20px',
  borderRadius: '10px', // Rounded pill shape
  backgroundColor: colors.background,
  border: `none`,
  transition: 'transform 0.3s ease, background-color 0.3s ease',
}));
