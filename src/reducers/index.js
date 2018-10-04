import {combineReducers} from 'redux'
import { alunoReducer as alunos  } from './alunoReducer';

export const rootReducer = combineReducers({
    alunos
})