import "./App.css";
import logo from "./assets/img/axians.png";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";
import { Row, ListGroup } from "react-bootstrap";

function App() {
  const [temperature, setTemperature] = useState("");
  const [id, setId] = useState("");
  const [scan,setScan] = useState("");
  const [hash,setHash] = useState("");

  useEffect(() => { 
    displayData();
  });

  const displayData = () => {
    let newUrl = new URL(window.location.href);
    let search_params = new URLSearchParams(newUrl.search);

    if (search_params.has("d")) {
      let nameParam = search_params.get("d");
      let newStr = nameParam.replace("C", "");
      let temperature = Math.round((parseInt(newStr) / 10 - 40 )* 100) / 100;
      setTemperature(temperature);
    } else {
      setTemperature("Introuvable");
    }

    if (search_params.has("i")) {
      let nameParam = search_params.get("i");
      setId(nameParam);
    } else {
      setId("Introuvable");
    }

    if (search_params.has("n")) {
      let nameParam = search_params.get("n");
      setScan(nameParam);
    } else {
      setScan("Introuvable");
    }

    if (search_params.has("h")) {
      let nameParam = search_params.get("h");
      setHash(nameParam);
    } else {
      setHash("Introuvable");
    }
    console.log("test")
  };

  return (
    <Container className="p-3">
      <Row className="m-5">
        <img src={logo} className="App-logo" alt="logo" />
      </Row>
      <Row>
        <ListGroup>
          <ListGroup.Item>
            <span>ID : </span> {id} <small>(i)</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Temperature : </span>
            <Badge bg="warning">{temperature} °C</Badge> <small>(d)</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Nombre scan : </span>
            {scan} <small>(n)</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Hash : </span>
            {hash} <small>(h)</small>
          </ListGroup.Item>
        </ListGroup>
      </Row>
      <Row className="mt-5">
        <h2>Log temperature</h2>
        <ListGroup>

        </ListGroup>
      </Row>
    </Container>
  );
}

export default App;
