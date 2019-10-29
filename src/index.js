import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { getfirestore } from 'redux-firestore';
// import { getfirebase} from 'react-redux-firebase';

import './index.css';
import App from './component/App';
import rootReducer from './reducers';
import rootSaga from './sagas/rootSaga';
// import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

//Create store using root reducer
const store = createStore(
                rootReducer,
    applyMiddleware(sagaMiddleware),
                // composeWithDevTools()
            );

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root')
        );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
