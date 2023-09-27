import { Data } from '../../types';
import { PROFESSIONAL_DATA } from '../actions';

type ActionType = {
  type: string,
  data: Data,
};

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

const professionalReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case PROFESSIONAL_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default professionalReducer;
