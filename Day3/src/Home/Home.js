import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/home.css'
import '../styles/index.css'
import NavbarTop from './NavbarTop';
import SearchBar from './SearchBar';
import SettingsMenu from './SettingsMenu';
// import { Link } from 'react-router-dom';


function Avatar() {
  return (
    <>
    <div>
       <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
            class="rounded-circle"
            height="50"
            alt=""
            loading="lazy"
            />
    </div>
            <SettingsMenu/>
            </>
  )
}

export class Home extends Component {
  render() {
    return (
      <>

<div class="bg">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="topnav">
        <Navbar.Brand >Music App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <NavbarTop/>
        <Navbar/>
      </Container>
      <SearchBar/>
      <Avatar/>
      <div>
      </div>
    </Navbar>
    </div>
      </>
    )
}
}
export default Home;
