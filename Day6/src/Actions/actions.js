import axios from 'axios';
// const response = await axios.get('/api/items?query=${query}');

export const searchItems = (query) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8080/');
    dispatch({ type: 'SEARCH_ITEMS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'SEARCH_ITEMS_ERROR', payload: error.message });
  }
};
