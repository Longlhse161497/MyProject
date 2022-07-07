import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponet';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div className='App'>
              <Main></Main>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
