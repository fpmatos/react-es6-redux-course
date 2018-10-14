import React, {Component} from "react";
import { Route } from "react-router-dom";
import App from "./App";
import AlunoForm from "./components/aluno/AlunoForm";
import { BrowserRouter } from "react-router-dom";
import AlunoList from "./components/aluno/AlunoList";

export const Routes = () => {
    return(
        <BrowserRouter>
            <App>
                <Route exact path='/form' component={AlunoForm}></Route>
                <Route path='/form/:id' component={AlunoForm}></Route>
                <Route exact path='/' component={AlunoList}></Route>
            </App>
        </BrowserRouter>
    );
}