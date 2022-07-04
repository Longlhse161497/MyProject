import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponet';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <BrowserRouter>
          <div className='App'>
            <Main></Main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
