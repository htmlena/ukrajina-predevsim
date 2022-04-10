import { Nav, List, ListItem, LinkItem } from './NavbarStyles';
import Link from 'next/link';

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
