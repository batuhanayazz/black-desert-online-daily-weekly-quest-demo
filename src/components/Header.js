import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components for CSS-in-JS
const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 15px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
    border-radius: 5px;
  }
`;

const Home = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo to="/">BDO Quest Tracker</Logo>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/quests">Quests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register">Register</NavLink>
            </NavItem>
          </NavMenu>
        </Container>
      </Header>
    </>
  );
};

export default Home;
