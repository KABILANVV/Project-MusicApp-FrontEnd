import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/home.css'
import '../styles/index.css'
import NavbarTop from './NavbarTop';
import SettingsMenu from './SettingsMenu';
import SearchBar from '../Components/SearchBar';
import Output from './Output';
import MusicPlayer from '../MusicPlayer/Musicplayer';
// import { Provider } from 'react-redux';
// import store from '../Store/Store';
// import Output from './Output';
// import { Link } from 'react-router-dom';


function Avatar() {
  return (
    <>
    <div>
       <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
            class="rounded-circle"
            height="60"
            alt=""
            loading="lazy"
            />
    </div>
            <SettingsMenu/>
            </>
  )
}
// className="bg-body-tertiary"
export class Home extends Component {
  render() {
    return (
      <>
<div>
<div class="bg">
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid className="topnav">
        <Navbar.Brand >Music App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <NavbarTop/>
            <SearchBar/>
      </Container>
      <Avatar/>
      <div>
      </div>
     </Navbar> 
     <div className='output'>
      <Output/>
     </div>
      <MusicPlayer/>
    </div> 
</div>
  
      </>
    )
}
}
export default Home;
