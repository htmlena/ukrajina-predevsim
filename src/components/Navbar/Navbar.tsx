import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
  }
`;

const ListItem = styled.li`
  padding-right: 0.6rem;

  @media (min-width: 768px) {
    padding-left: 4.6rem;
  }
`;

const LinkItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    border-bottom: 3px solid black;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <Link href="/literatura" passHref>
            <LinkItem>Literatura</LinkItem>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/hudba" passHref>
            <LinkItem>Hudba</LinkItem>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/umeni" passHref>
            <LinkItem>Umění</LinkItem>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/jazyk" passHref>
            <LinkItem>Jazyk</LinkItem>
          </Link>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Navbar;
