import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const AlunoList = ({alunos}) => {
    return (
       <div>
           {alunos.map((course, i) => <div><h1 key={i}>{course.name}</h1><Link to={`form/${course.id}`}>Alterar</Link></div>)}
       </div>
    );
}

const mapStateToProps = (state, prevProps) => {
    return {
        alunos: state.alunos
    }
}

export default connect(mapStateToProps)(AlunoList);
