import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/alunoActions';

class AlunoForm extends Component{

    constructor(){
        super();
        this.alunoAlterado = this.alunoAlterado.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    aluno = (course, i) => <h1 key={i}>{course.nome}</h1>;

    alunoAlterado(event){
        this.props.dispatch(actions.alterarDadoAluno(event));
    }

    salvar(){
        this.props.dispatch(actions.criarAluno());
    }

    render() {
        return <div>
            <input name="nome" onChange={this.alunoAlterado} value={this.props.alunos.alunoSelecionado.nome}/>
            <button onClick={this.salvar}>Salvar</button>
            <button onClick={this.onSave}>Cancelar</button>

            {this.props.alunos.data.map(this.aluno)}            
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alunos: state.alunos
    }
}

export default connect(mapStateToProps)(AlunoForm);