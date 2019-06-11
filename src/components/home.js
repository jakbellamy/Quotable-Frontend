import React, { Component } from 'react'
import {endpoints} from '../endpoints'
import WeeklyImageContainer from './weeklyImageContainer';
import InputContainer from './inputContainer';

export default class Home extends Component {
  state = {
    selectedPainting: null
  }

  fillPaintings = async () => {
    return new Promise((resolve) => {fetch(`${endpoints.metSearch}painting, canvas`)
    .then(res => res.json())
    .then(res => resolve(res.objectIDs))
    })
  }

  fetchSelectedPainting = async () => {
    let paintingIDs = await this.fillPaintings()
    let randomSelection = async() => {
        return new Promise(() => {
            fetch(`${endpoints.metObject}${paintingIDs[Math.floor((Math.random() * paintingIDs.length) + 1)]}`)
            .then(res => res.json())
            .then(res => this.setState({selectedPainting: res.primaryImageSmall}))
        })
    }
    await randomSelection()
  }

  componentDidMount(){
    this.fetchSelectedPainting()
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <WeeklyImageContainer image={this.state.selectedPainting}/>
        <InputContainer />
      </div>
    )
  }
}


// selectedPaintingID: Math.floor((Math.random() * res.objectIDs.length) + 1)