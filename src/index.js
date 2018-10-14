import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store/configureStore';
import {Provider} from 'react-redux'
import * as actions from './actions/alunoActions';
import { Routes } from './routes';

const store = configureStore();

store.dispatch(actions.carregarAlunos());

ReactDOM.render( <Provider store={store}>
    <Routes />
    </Provider> , 
    document.getElementById('root'));
registerServiceWorker();
