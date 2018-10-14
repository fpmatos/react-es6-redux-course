import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/alunoActions';


class AlunoForm extends Component{

    constructor(props){
        super(props);
        this.state =  Object.assign({}, props.aluno);
        this.alunoAlterado = this.alunoAlterado.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.aluno.id !== nextProps.aluno.id)
            this.setState(Object.assign({}, nextProps.aluno));
    }

    componentDidMount(){
        this.props.dispatch(actions.carregarAlunos());
    }

    alunoAlterado(event){
        this.setState({[event.target.name]: event.target.value});
    }

    salvar(){
        this.props.dispatch(actions.criarAluno(this.state));
        this.setState({name: ''});
    }

    render() {
        return <div>
            <input name="name" onChange={this.alunoAlterado} value={this.state.name}/>
            <button onClick={this.salvar}>Salvar</button>
            <button onClick={this.onSave}>Cancelar</button>          
        </div>
    }
}

function retornarAlunoPorId(alunos, id){
    if(alunos)
        return alunos.find(aluno => aluno.id === id);
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let aluno = retornarAlunoPorId(state.alunos, id);

    if(!aluno)
        aluno = {id: '', name: ''}
    
    return {
        aluno
    }
}

export default connect(mapStateToProps)(AlunoForm);