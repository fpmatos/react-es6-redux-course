import React, {Component} from 'react';
import {connect} from 'react-redux';
import {criarAluno, alterarDadoAluno} from '../../actions/alunoAction';

class AlunoForm extends Component{
    constructor(props){
        super(props);
    }

    aluno = (course, i) => <h1 key={i}>{course.nome}</h1>;

    render() {
        return <div>
            <input name="nome" onChange={this.props.alunoAlterado} value={this.props.alunos.alunoSelecionado.nome}/>
            <button onClick={this.props.onSave}>Salvar</button>
            <button onClick={this.onSave}>Cancelar</button>

            {this.props.alunos.data.map(this.aluno)}            
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: () => {
            dispatch(criarAluno());
        },
        alunoAlterado: (evento) => {
            dispatch(alterarDadoAluno(evento));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alunos: state.alunos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlunoForm);