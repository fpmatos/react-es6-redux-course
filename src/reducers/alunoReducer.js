import * as actionTypes from '../actions/actionTypes';

export const alunoReducer = (state = {alunoSelecionado: {name: ''}, data: []}, action) => {
    switch(action.type) {
        case actionTypes.CARREGAR_ALUNOS:   
            let newState_carregarAlunos = {...state};            
            newState_carregarAlunos.data = [...action.alunos];
            return newState_carregarAlunos;
        case actionTypes.CRIAR_ALUNO:        
            let newState_criarAluno = {...state};
            newState_criarAluno.data.push(state.alunoSelecionado);
            newState_criarAluno.alunoSelecionado = {name: ''};
            return  newState_criarAluno;
        case actionTypes.ALTERAR_ALUNO:
            let newState_alterarAluno = {...state};
            newState_alterarAluno.alunoSelecionado[action.event.target.name] = action.event.target.value;
            return newState_alterarAluno;
        default:
            return state; 
    }
}