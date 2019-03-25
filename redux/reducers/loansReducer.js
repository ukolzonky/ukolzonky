import { fetcher } from '../../utils/fetcher';
import configuration from '../../configuration';

const initState = {
  loading: false,
  error:  null,
  loans: []
}

const LOANS_REQUEST = 'loans/LOANS_REQUEST';
const LOANS_SUCCESS = 'loans/LOANS_SUCCESS';
const LOANS_ERROR = 'loans/LOANS_ERROR';

export const clearLoans = () => async(dispatch) => {
  dispatch({
    type: LOANS_SUCCESS,
    payload: []
  });
}

export const getLoansByRatingId = (query = '') => async(dispatch) => {
  dispatch({ type: LOANS_REQUEST });

  try {
    const response = await fetcher(configuration.api.marketplace + query || '');

    dispatch({
      type: LOANS_SUCCESS,
      payload: response
    });
  } catch(error) {
    console.warn(error);
    dispatch({
      type: LOANS_ERROR,
      payload: 'Vyskytla se neočekávaná chyba a nebylo možné načíst nové půjčky.'
    });
  }
}

export default (state = initState, action) => {
  switch(action.type) {
    case LOANS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOANS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case LOANS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        loans: action.payload
      }
    default:
      return state;
  }
}
