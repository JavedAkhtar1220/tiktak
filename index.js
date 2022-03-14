/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// Redux 
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// Components  
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';

const RNRedux = () => {
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => RNRedux);
