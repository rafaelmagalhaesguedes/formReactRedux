import { combineReducers } from 'redux';
import { Data } from '../../types';

type ActionType = {
  type: string,
  data: Data,
};

const INITIAL_STATE = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

const personalReducer = (state = INITIAL_STATE.personalData, action: ActionType) => {
  switch (action.type) {
    case 'PERSONAL_DATA':
      return { ...state, ...action.data };
    default:
      return state;
  }
};

const professionalReducer = (
  state = INITIAL_STATE.professionalData,
  action: ActionType,
) => {
  switch (action.type) {
    case 'PROFESSIONAL_DATA':
      return { ...state, ...action.data };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  personalReducer,
  professionalReducer,
});

export default rootReducer;
