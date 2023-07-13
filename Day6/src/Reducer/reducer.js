const initialState = {
    items: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_ITEMS_SUCCESS':
        return {
          ...state,
          items: action.payload,
          error: null,
        };
      case 'SEARCH_ITEMS_ERROR':
        return {
          ...state,
          items: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  