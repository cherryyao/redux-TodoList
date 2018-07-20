import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './container/Appcontainer'
import rootReducer from './reducers'
import {Provider} from "react-redux"

const store = createStore(rootReducer)
const rootEl = document.getElementById('root')

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
    rootEl
)