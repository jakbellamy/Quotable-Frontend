import ReactDOM from 'react-dom'
import React, { Component } from 'react'
//components
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import CartoonPage from './components/cartoonPage';
import Registration from './components/registration';

export default class App extends Component {
  state = {
    view: 'game',
    switch: false
  }

  switchSwitch = () => {this.setState({switch: !this.state.switch})}
  viewSwitch = (view) => {
    switch(view){
      case 'login':
        return <Login />
        break;
      case 'signup':
        return <Registration />
        break;
      case 'game':
        if(!this.state.switch){
          return <CartoonPage />
          break;
        }else{
          return <Home />
          break
        }

    }
  }

  switchView = (selected) => {
    this.setState({view: selected})
  }

  render() {
    return (
      <div className="app">
        <Header select={this.switchView} switch={this.switchSwitch}/>
        {this.viewSwitch(this.state.view)}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
