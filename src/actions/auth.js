import * as api from "../api";
import { setCurrentUser } from "./currentUser";
export const signUp = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const logIn = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
