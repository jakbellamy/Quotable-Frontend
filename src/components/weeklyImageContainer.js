import React, { Component } from 'react'
import {styles} from '../styles/weeklyImageStyles'
import { endpoints } from '../endpoints';

export default class WeeklyImageContainer extends Component {
  
  state = {
      imgURL: ''
  }

  render() {
    return (
      <div style={styles.imgDiv}>
        {this.props.image ? 
            <img src={this.props.image} style={styles.img}/>
        :
            <h3 style={styles.loading}>Randomly Selecting Your Image...</h3>
        }
        
      </div>
    )
  }
}
