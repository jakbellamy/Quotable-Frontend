import React, { Component } from 'react'
import {styles} from '../styles/headerStyles'

export default class Header extends Component {
  state = {
    buttonPress: {
      login: false,
      signup: false,
      navItem: false
    }
  }

  loginPress = () => {
    this.setState({buttonPress: {...this.state.buttonPress, login: true}}, () => 
      setTimeout(() => {
        this.setState({buttonPress: {...this.state.buttonPress, login: false}})
      }, 250)
    )}
  signupPress = () => {
    this.setState({buttonPress: {...this.state.buttonPress, signup: true}}, () => 
      setTimeout(() => {
        this.setState({buttonPress: {...this.state.buttonPress, signup: false}})
      }, 250)
    )}

  clickButton = (button) => {
    switch(button){
      case 'login':
        this.loginPress()
        this.props.select('login')
        break;
      case 'signup':
        this.signupPress()
        this.props.select('signup')
        break;
    }
  }
    
  
  render() {
    return (
      <header name="header" style={styles.header}> 
        <div name="logo" style={styles.logo}>
          <h1 style={styles.the}>The</h1>
          <h1 style={styles.captioner}>Captioner</h1>
        </div>

        {/* Log Buttons */}
        <div name="logbar" style={styles.logbar}>
        <div name="userLogin" style={styles.navbarLeft} >
              {this.state.buttonPress.signup ? 
                <span 
                  style={styles.spanRed.inactive} 
                  onClick={() => this.clickButton('signup')}
                >
                  Register
                </span>
                :
                <span 
                  style={styles.spanRed.active}  
                  onClick={() => this.clickButton('signup')}>
                  Register
                </span>
              }

              {this.state.buttonPress.login ? 
                <span 
                  style={styles.spanBlack.inactive} 
                  onClick={() => this.clickButton('login')}
                >
                  Login
                </span>
                :
                <span 
                  style={styles.spanBlack.active}  
                  onClick={() => this.clickButton('login')}>
                  Login
                </span>
              }
          </div>
        </div>

        {/* Navbar */}
        <div name="navbar" style={styles.navbar}>
          <div name="navItems" style={styles.navbarCenter} >
            <span 
              style={styles.span}
              onClick={() => this.props.select('game')}
            >
              Test Game
            </span>
            <span 
              style={styles.span}
              onClick={() => this.props.switch()}
            >
              Toggle Format
            </span>      
            <span style={styles.span}>
              Start Server
            </span>      
            <span style={styles.span}>
              About
            </span>
          </div>            
        </div>
      </header>
    )
  }
}
