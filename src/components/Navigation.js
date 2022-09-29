import styled from "styled-components";

export default function Navigation() {
  return (
    <NavMain>
      <NavList>
        <NavEntry>
          <NavLink href="#">Link1</NavLink>
        </NavEntry>
        <NavEntry>
          <NavLink href="#">Link2</NavLink>
        </NavEntry>
        <NavEntry>
          <NavLink href="#">Link3</NavLink>
        </NavEntry>
        <NavEntry>
          <NavLink href="#">Link4</NavLink>
        </NavEntry>
      </NavList>
    </NavMain>
  );
}

const NavMain = styled.nav`
  width: 100%;
  height: 100%;
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style-type: none;
`;
const NavEntry = styled.li``;
const NavLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
`;
