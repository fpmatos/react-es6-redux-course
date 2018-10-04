import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../actions/alunoAction';

class AlunoForm extends Component{

    aluno = (course, i) => <h1 key={i}>{course.nome}</h1>;

    render() {
        return <div>
            <input name="nome" onChange={this.props.actions.alterarDadoAluno} value={this.props.alunos.alunoSelecionado.nome}/>
            <button onClick={this.props.actions.criarAluno}>Salvar</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlunoForm);