import * as actionTypes from './actionTypes'
import alunosApi from "../api/mockAlunosApi";

export const criarAluno = (aluno) => {
    return {
        type: actionTypes.CRIAR_ALUNO,
        aluno
    }
}

export const carregarAlunosSucesso = (alunos) => {
    return {
        type: actionTypes.CARREGAR_ALUNOS,
        alunos
    }
}

export const carregarAlunos = () => {
    return (dispatch) => {
        return alunosApi.getAll().then(data => {
            dispatch(carregarAlunosSucesso(data));
        }).catch(err => {
            throw(err);
        });
    }
}