import axios from "axios";

import { DATA_LOADED, SINGLE_ORDER, DELETE_ORDER, DATA_UPDATED } from "./types";

export const deleteOrder = (id) => async (dispatch) => {
  console.log(id);
  try {
    const res = await axios.delete(`http://localhost:3000/api/v1/orders/${id}`);
    console.log(res.data);
    dispatch({
      type: DELETE_ORDER,
      payload: res.data,
    });    
  } catch (error) {
    console.log(error.response);
  }
};

export const getSingleOrder = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/orders/${id}`);
    console.log(res.data);
    dispatch({
      type: SINGLE_ORDER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const loadedData = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/orders`);
    console.log(res.data);
    dispatch({
      type: DATA_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const updateOrder = (id,status) => async (dispatch) => {
  console.log(id,status);
  try {
    const res = await axios.put(
      `http://localhost:3000/api/v1/orders/${id}`,{status:status}
    );
    console.log(res.data);
    dispatch({
      type: DATA_UPDATED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
