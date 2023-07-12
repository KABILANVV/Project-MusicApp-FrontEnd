
import Nav from 'react-bootstrap/Nav';
import { Dropdown, DropdownButton, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarTop() {
    return (
      <>
  <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
            <ul>
            <li className='dropdown'>
              <Dropdown>
                <DropdownButton id="dropdown-basic-button" title="Artists">
                  <Dropdown.Item href="#/action-1">Anirudh Ravichander</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Hiphop Tamizha</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Justin Bieber</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Selena Gomez</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Ariana Grande</Dropdown.Item>
                  <Dropdown.Item href="#/action-6">Dua Lipa</Dropdown.Item>
                </DropdownButton>  
                {/* <Dropdown.Menu> 
                </Dropdown.Menu> */}
              </Dropdown>
            </li>
              <li><Nav.Link href="/myplaylist">
                My Playlist 
              </Nav.Link></li>
              <li><Nav.Link href="login">
              Login</Nav.Link></li>
              <li><Link href='/'>Home</Link></li>
              </ul>
              </Nav>
              {/* <div className="col my-1 my-lg-0"> */}
              {/* </div>   */}
          </Navbar.Collapse>
      </>
    )
  }