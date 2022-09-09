import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

export default function NavBar({ user, setUser, aboutToggle, showAbout }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }
  return (
    <Container className="fixed-top">
      <Navbar expand="sm" variant="dark" bg="dark">
      <Container>
          <Navbar.Brand href="/home">Ryan Okamoto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link onClick={aboutToggle}>{!showAbout ? "About" : "Hide about"}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}












// !!!! DEFAULT NAVBAR !!!!!
//   return (
//     <nav>
//       <span>Welcome, {user.name}</span>
//       &nbsp; | &nbsp;
//       <Link to="" onClick={handleLogOut}>
//         Log Out
//       </Link>
//     </nav>
//   );
// }
