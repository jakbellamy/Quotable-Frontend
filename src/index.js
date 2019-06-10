import ReactDOM from 'react-dom'
import React, { Component } from 'react'
//components
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import CartoonPage from './components/cartoonPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CartoonPage />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
