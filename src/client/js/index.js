import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './data/store';
import { App } from './components/App/App';

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./data/reducer');
    store.replaceReducer(nextRootReducer);
  });
}
