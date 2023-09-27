import { Data } from '../../types';
import { PROFESSIONAL_DATA } from '../actions';

type ActionType = {
  type: string,
  payload: Data,
};

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

const professionalReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case PROFESSIONAL_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default professionalReducer;
