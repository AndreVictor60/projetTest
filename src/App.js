import "./App.css";
import logo from "./assets/img/axians.png";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import { Form, InputGroup, Row, Button, ListGroup } from "react-bootstrap";

function App() {
  const [url, setUrl] = useState("");
  const [temperature, setTemperature] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  const handleCheck = (e) => {
    e.preventDefault();
    let str = url;
    let newUrl = new URL(str);
    var search_params = new URLSearchParams(newUrl.search);

    if (search_params.has("d")) {
      let nameParam = search_params.get("d");
      let newStr = nameParam.replace("C", "");
      var temperature = parseInt(newStr) / 10 - 40;
      setTemperature(temperature);
    } else {
      setTemperature("Introuvable");
    }

    if (search_params.has("i")) {
      let nameParam = search_params.get("i");
      var id = nameParam;
      setId(nameParam);
    } else {
      setId("Introuvable");
    }
    const updateData = [
      ...data,
      {
        id: id,
        temp: temperature,
        date: new Date().toLocaleString()
      },
    ];
    setData(updateData);
  };

  return (
    <Container className="p-3">
      <Form onSubmit={handleCheck}>
        <Row>
          <InputGroup className="mb-3">
            <Form.Control
              className="form-control"
              type="url"
              name="url"
              id="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="https://example.com"
            />
            <Button type="submit" variant="primary" id="button-addon2">
              Update
            </Button>
          </InputGroup>
        </Row>
      </Form>
      <Row className="m-5">
        <img src={logo} className="App-logo" alt="logo" />
      </Row>
      <Row>
        <ListGroup>
          <ListGroup.Item>
            <span>ID : </span> {id}
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Temperature : </span>
            <Badge bg="warning">{temperature} °C</Badge>
          </ListGroup.Item>
        </ListGroup>
      </Row>
      <Row className="mt-5">
        <h2>{console.log("data", data)}Log temperature</h2>
        <ListGroup>
          {data
          .map((i) => (
            <ListGroup.Item key={i.id}>
              <p>
              <span>Date :</span> {i.date}  <span>Temperature :</span> {i.temp} °C ({id})
              </p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
}

export default App;
