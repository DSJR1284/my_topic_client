import React from 'react' 
import {ReactDom} from "react-dom"
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


import {rootReducer} from './reducers/rootReducer'
import App from './components/App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)