
import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import TasksList from "./components/TasksList";
import Accordion from 'react-bootstrap/Accordion';

function App() {
  return (
    <Container>
     



       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <Navbar /></Accordion.Header>
        <Accordion.Body>
          <Row className="justify-content-md-center">
        <Col  lg="6">
          <AddTask />
          <TasksList/>
        </Col>
      </Row>
        </Accordion.Body>
      </Accordion.Item>
       </Accordion>

      
    </Container>
  );
}

export default App;
