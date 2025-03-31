import React, { PropsWithChildren } from 'react';
import { colors, widths } from '../styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
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
          <NavLink to="/">Rover's Photos</NavLink>
          <NavLink to="/timeline">Missions Timeline</NavLink>
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
  justifyContent: 'space-between', // Cambiado para alinear el título con las secciones
  borderBottom: `solid 1px #d2b48c`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '10px 30px', // Increased padding for a modern look
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Alinea el contenido a la izquierda
  width: `${widths.regularPageWidth}px`,
  margin: '0 auto', // Centra el contenedor dentro del header
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-start', // Alinea el título al inicio
  flex: 1,
  maxWidth: '1100px', // Asegura que coincida con el ancho de las secciones de abajo
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  color: colors.accent,
  alignItems: 'center',
  ':hover': {
    color: colors.orange.dark,
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
  marginRight: 'auto', // Pushes the title to the left
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
    color: '#b87333', // Match footer text color
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
    color: '#b87333', // Match footer text color
  },
});

const NavButtons = styled.div({
  display: 'flex',
  gap: '20px', // Increased gap for better spacing
  marginLeft: 'auto', // Pushes buttons to the far right
});

const NavLink = styled(Link)({
  textDecoration: 'none',
  color: colors.text, // Cambiado a un tono más neutro
  fontSize: '1em',
  fontWeight: 'bold',
  padding: '10px 15px', // Botón con apariencia profesional
  borderRadius: '5px',
  backgroundColor: colors.background, // Fondo neutro
  border: `1px solid ${colors.textSecondary}`, // Borde gris para un diseño más profesional
  ':hover': {
    backgroundColor: colors.accent, // Fondo gris claro al pasar el cursor
  },
});
