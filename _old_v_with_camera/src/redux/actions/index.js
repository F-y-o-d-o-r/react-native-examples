import { SEARCH_LOGIN, MOVIES_FETCHED, MOVIES_FAILED } from '../types';

export const searchChanged = (text) => {
  return {
    type: SEARCH_LOGIN,
    payload: text
  };
};

export const getMovies = (text) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({ type: MOVIES_FETCHED, payload: success });
    return success;
  }
  function onError(error) {
    dispatch({ type: MOVIES_FAILED, error });
    return error;
  }
  try {
    const URL = `https://api.tvmaze.com/search/shows?q=${text}`;
    const res = await fetch(URL, {
      method: 'GET'
    });
    const success = await res.json();
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }
};
