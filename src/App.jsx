import { Container, Navbar } from "react-bootstrap";
import UserList from "./UserList";

function App() {
  return (
    <>
      <Navbar bg="secondary" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">UserList.data</Navbar.Brand>
        </Container>
      </Navbar>
      <UserList />
    </>
  );
}

export default App;
