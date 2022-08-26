import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }
  return (
    <Container>
      <Navbar expand="sm" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Ryan Okamoto</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/work">Work</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/about">About</Navbar.Brand>
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
