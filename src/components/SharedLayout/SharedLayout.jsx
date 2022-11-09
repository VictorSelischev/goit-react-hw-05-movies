import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, Link } from './SharedLayout.styled';
import { AiTwotoneHome } from 'react-icons/ai';
import { RiMovie2Fill } from 'react-icons/ri';

const navItems = [
  { href: '/', text: 'Home', icon: AiTwotoneHome },
  { href: 'movies', text: 'Movies', icon: RiMovie2Fill },
];

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          {navItems.map(({ href, text, icon: Icon }) => (
            <Link to={href} key={href}>
              <Icon size='24' style={{marginRight: 4}} />
              {text}
            </Link>
          ))}
          {/* <Link to='/' end >Home</Link>
                <Link to='/movies'>Movies</Link> */}
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};
