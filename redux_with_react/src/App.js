import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'

function App() {
    return (
        <Provider store={store}>
            <div className="App App-header">
                <CakeContainer />
            </div>
        </Provider>
    );
}

export default App;
