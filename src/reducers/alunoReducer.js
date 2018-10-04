export const alunoReducer = (state = {alunoSelecionado: {nome: ''}, data: []}, action) => {
    switch(action.type) {
        case "CRIAR_ALUNO":        
            let newState_criarAluno = {...state};
            newState_criarAluno.data.push(state.alunoSelecionado);
            newState_criarAluno.alunoSelecionado = {nome: ''};
            return  newState_criarAluno;
        case "ALTERAR_ALUNO":
            let newState_alterarAluno = {...state};
            newState_alterarAluno.alunoSelecionado[action.event.target.name] = action.event.target.value;
            return newState_alterarAluno;
        default:
            return state;
    }
}