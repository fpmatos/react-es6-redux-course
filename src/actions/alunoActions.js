import * as actionTypes from './actionTypes'

export const criarAluno = () => {
    return {
        type: actionTypes.CRIAR_ALUNO
    }
}

export const alterarDadoAluno = (event) => {
    return {
        type: actionTypes.ALTERAR_ALUNO,
        event: event
    }
} 