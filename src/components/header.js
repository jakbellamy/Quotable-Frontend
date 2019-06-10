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

  clickButton = (button) => {
    switch(button){
      case 'login':
        this.setState({
          buttonPress: {...this.state.buttonPress, login: !this.state.buttonPress.login}
        })
        break;
      case 'signup':
          this.setState({
            buttonPress: {...this.state.buttonPress, signup: !this.state.buttonPress.signup}
          })
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
        <div name="navbar" style={styles.navbar}>
          <div name="userLogin" style={styles.navbarLeft} >
            {/* Register Button */}
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

            {/* Login Button */}
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

          <div name="navItems" style={styles.navbarCenter} >
            <span style={styles.span}>
              Game Type
            </span>
            <span style={styles.span}>
              Join Server
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
