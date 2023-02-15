import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../assets/img/axians.png";
import LogTemperature from "../components/TemperatureMonitoring/LogTemperature";
import MonitoringTemperature from "../components/TemperatureMonitoring/MonitoringTemperature";
const Home = () => {
  const [temperature, setTemperature] = useState("");
  const [id, setId] = useState("");
  const [scan, setScan] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
    displayData();
    handleLog();
  });

  const displayData = () => {
    let newUrl = new URL(window.location.href);
    let search_params = new URLSearchParams(newUrl.search);

    if (search_params.has("d")) {
      let nameParam = search_params.get("d");
      let newStr = nameParam.replace("C", "");
      let temperature = Math.round((parseInt(newStr) / 10 - 40) * 100) / 100;
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
  };

  const handleLog = async () => {
    if (id || temperature || hash) {
      await axios({
        method: "post",
        url: `http://localhost:5000/api/temperature/save`,
        data: {
          id,
          temperature,
          hash,
        },
      })
        .then((res) => {
          console.log(res.data.errors?.hash);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Container className="p-3">
        <Row className="m-5">
          <img src={logo} className="App-logo" alt="logo Axians" />
        </Row>
        <Row>
          <MonitoringTemperature temperature={temperature} id={id} hash={hash} scan={scan} />
        </Row>
        <Row></Row>
        <Row className="mt-5">
            <LogTemperature temperature={temperature} id={id} hash={hash} scan={scan} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
