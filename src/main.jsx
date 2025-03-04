import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './App.css'
import { Provider } from 'react-redux'
import store from './Components/redux/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <App />
    </Provider>

)
