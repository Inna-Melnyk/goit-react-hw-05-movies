import { Suspense } from 'react';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { RiMovie2Fill } from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { Loader } from 'components/Loader/Loader';

import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <RiMovie2Fill size="22" />
          <span>Movies Cinema</span>
        </Logo>
        <nav>
          <Link to="/">
            <AiOutlineHome size="18" />
            <span>Home</span>
          </Link>
          <Link to="/movies">
            <BiMoviePlay size="18" />
            <span>Movies</span>
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
