import * as actionTypes from '../actions/actionTypes';

export const alunoReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.CARREGAR_ALUNOS:   
            return [...action.alunos];
        case actionTypes.CRIAR_ALUNO:        
            return [...state, action.aluno];
        // case actionTypes.ALTERAR_ALUNO:
        //     let newState_alterarAluno = {...state};
        //     newState_alterarAluno.alunoSelecionado[action.event.target.name] = action.event.target.value;
        //     return newState_alterarAluno;
        default:
            return state; 
    }
}