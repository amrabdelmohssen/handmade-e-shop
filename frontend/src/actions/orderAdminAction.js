import axios from "axios";

import { DATA_LOADED, SINGLE_ORDER, DELETE_ORDER, DATA_UPDATED } from "./types";

export const deleteOrder = (id) => async (dispatch,getState) => {
  console.log(id);
  try {
    const {
      userLoginReducer: { userInfo },
  } = getState();

  const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
      },
  };
    const res = await axios.delete(`http://localhost:3000/api/v1/orders/${id}`,config);
    console.log(res.data);
    dispatch({
      type: DELETE_ORDER,
      payload: {id},
    });    
  } catch (error) {
    console.log(error.response);
  }
};

export const getSingleOrder = (id) => async (dispatch,getState) => {
  try {
    const {
      userLoginReducer: { userInfo },
  } = getState();

  const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
      },
  };
    const res = await axios.get(`http://localhost:3000/api/v1/orders/${id}`,config);
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

export const updateOrder = (id,status) => async (dispatch,getState) => {
  console.log(id,status);
  try {
    const {
      userLoginReducer: { userInfo },
  } = getState();

  const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
      },
  };
    
    const res = await axios.put(
      `http://localhost:3000/api/v1/orders/${id}`,{status:status},config
    );
    console.log(res.data ,"hhhhhhh");
    // console.log(res.data ,"hhhhhhh")
    dispatch({
      type: DATA_UPDATED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
