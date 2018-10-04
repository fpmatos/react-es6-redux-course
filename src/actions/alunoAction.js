export const criarAluno = () => {
    return {
        type: 'CRIAR_ALUNO'
    }
}

export const alterarDadoAluno = (event) => {
    return {
        type: 'ALTERAR_ALUNO',
        event: event
    }
} 

export default {
    criarAluno,
    alterarDadoAluno
}