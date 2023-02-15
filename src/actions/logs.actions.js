import axios from "axios";

export const GET_LOGS_BY_ID = "GET_LOGS_BY_ID";
export const SAVE_LOG = "SAVE_LOG";
export const GET_LOG_ERRORS = "GET_LOG_ERRORS";

export const getLogsById = (id) => {
    return async (dispatch) => {
        return await axios
          .get(`http://localhost:5000/api/temperature/${id}`)
          .then((res) => {
            dispatch({ type: GET_LOGS_BY_ID, payload: res.data });
          })
          .catch((err) => console.log(err));
      }; 
}

export const saveLog = (data) => {
  return async (dispatch) => {
    console.log("saveLog",data)
    return await axios
      .post(`http://localhost:5000/api/temperature/save`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
};