import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          {navItems.map(({ href, text }) => (
            <Link to={href} key={href}>
              {text}
            </Link>
          ))}
          {/* <Link to='/' end >Home</Link>
                <Link to='/movies'>Movies</Link> */}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
