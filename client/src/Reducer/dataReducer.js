const initialState = {
  data: [],
  user: {},
  loading: false,
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        loading: true,
      };
    }
    case "GET_DATA_SUCCESS": {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case "GET_DATA_ERROR": {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }
    case "SEARCH_DATA_SUCCESS": {
      return { ...state, data: action.payload, loading: false };
    }

    case "SEARCH_DATA": {
      return { ...state, loading: true };
    }

    case "SEARCH_DATA_FAIL": {
      return { ...state, error: action.payload, loading: false };
    }

    case "GET_TOKEN": {
      return {
        ...state,
        user: action.payload,
      };
    }

    case "LOG_OUT": {
      return {
        data: [],
        user: {},
      };
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
