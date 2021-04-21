import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/rootReducer";

let store = createStore(rootReducer)

let app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
