import styled from 'styled-components';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
  }
`;

export const ListItem = styled.li`
  padding-right: 0.6rem;

  @media (min-width: 768px) {
    padding-left: 4.6rem;
  }
`;

export const LinkItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    border-bottom: 3px solid black;
  }
`;
