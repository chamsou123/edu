import React from 'react';
import './App.css';
import Days from './components/Days';
import Card from './components/Card';

export default class App extends React.Component {
    render() {
      return (
        <div className='App'>
          <Days />
          <Card />
        </div>
      )
    }
}
