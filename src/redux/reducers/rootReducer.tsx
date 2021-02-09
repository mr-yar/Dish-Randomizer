import {combineReducers} from 'redux';
import {buttonReducer} from './buttonReducer';

export const rootReducer = combineReducers({buttonReducer});
export type RootState = ReturnType<typeof rootReducer>;


