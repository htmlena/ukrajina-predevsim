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
    font-size: 1.6rem;
  }
`;

const Link = styled.a`
  cursor: pointer;

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
          <Link>Literatura</Link>
        </ListItem>
        <ListItem>
          <Link>Hudba</Link>
        </ListItem>
        <ListItem>
          <Link>Umění</Link>
        </ListItem>
        <ListItem>
          <Link>Jazyk</Link>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Navbar;
