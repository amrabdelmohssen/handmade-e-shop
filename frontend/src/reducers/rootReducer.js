import { DATA_LOADED, DELETE_ORDER, SINGLE_ORDER,DATA_UPDATED} from '../actions/types';

//Intial State
const initState = {
  Data: null,
  singleOrderData: {},
};

//Reducers
function rootReducer (state = initState, action)  {
  const { payload } = action;
  
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        Data: payload,
      };

    case DELETE_ORDER:
      return {
        ...state,
        
        // Data: payload,
      };

    case SINGLE_ORDER:
      return {
        ...state,
        singleOrderData: payload,
      };
      
    case DATA_UPDATED:
      return {
        ...state,
        singleOrderData: payload,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
