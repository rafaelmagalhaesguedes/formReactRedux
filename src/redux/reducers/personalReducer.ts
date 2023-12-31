import { Data } from '../../types';
import { PERSONAL_DATA } from '../actions';

type ActionType = {
  type: string,
  payload: Data,
};

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const personalReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case PERSONAL_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default personalReducer;
