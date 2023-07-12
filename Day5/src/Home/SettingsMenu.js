import {React,Component} from 'react';
import { Dropdown,DropdownButton } from 'react-bootstrap';

// class SettingsMenu extends React.Component {
//   constructor() {
//     super();
//     this.deleteAccount = this.deleteAccount.bind(this);
//     this.logout = this.logout.bind(this);
//   }

//   deleteAccount(e) {
//     console.log("Deleting Account")
//   }

//   logout(e) {
//     console.log("Logging out")
//   }

//   render() {
//     return (
  //     );
  //   }
  // }
  
  // export default SettingsMenu;
  
  export class SettingsMenu extends Component {
    render() {
      return (
              <Dropdown>
              <DropdownButton id="dropdown-basic-button"  title="Chris Smith">
                <Dropdown.Item >Edit Profile</Dropdown.Item>
                <Dropdown.Item >Change Password</Dropdown.Item>
                <Dropdown.Item >Privacy Settings</Dropdown.Item>
                <Dropdown.Item >Delete Account</Dropdown.Item>
                <Dropdown.Item >Logout</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
    )
  }
}

export default SettingsMenu