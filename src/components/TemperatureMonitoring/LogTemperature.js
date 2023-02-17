import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLogsById } from "../../actions/logs.actions";
import { dateParser, isEmpty, timeParser } from "../../assets/utils";
import { BsCardChecklist } from "react-icons/bs";

const LogTemperature = (props) => {
  const [loadLogs, setLoadLogs] = useState(true);
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logsReducer);

  useEffect(() => {
    const idTest = getId();
    if (loadLogs) {
      dispatch(getLogsById(idTest));
      setLoadLogs(false);
    }
  }, [dispatch, loadLogs]);

  const getId = () => {
    let newUrl = new URL(window.location.href);
    let search_params = new URLSearchParams(newUrl.search);
    let nameParam = "";
    if (search_params.has("i")) {
      nameParam = search_params.get("i");
    }
    return nameParam;
  };

  return (
    <>
      <h2>
        <BsCardChecklist /> Log de la température
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Heure</th>
            <th>Température</th>
          </tr>
        </thead>
        <tbody>
          {loadLogs ? (
              <tr>
                <td rowSpan="4" colSpan="4">
                  <div className="text-center py-5">
                      <Spinner animation="border" />
                  </div>
                </td>
              </tr>
          ) : !isEmpty(logs[0]) ? (
            
            logs.map((log) => {
              return (
                <tr key={log._id}>
                  <td>{dateParser(log.createdAt)}</td>
                  <td>{timeParser(log.createdAt)}</td>
                  <td>{log.temperature} °C</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-center fw-bold fst-italic" colSpan={3}>
                Aucune donnée trouvable
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default LogTemperature;
