import React, { Component } from 'react'
import WeeklyImageContainer from './weeklyImageContainer';
import InputContainer from './inputContainer';


export default class CartoonPage extends Component {
    state = {
        selectedCartoon: null
    }

    componentDidMount(){
        fetch('https://www.newyorker.com/cartoons/random/randomAPI')
        .then(res => res.json())
        .then(res => this.setState({selectedCartoon: res[0].src}))
    }
    render() {
        return (
            <div style={{display: 'flex'}}>
                <WeeklyImageContainer image={this.state.selectedCartoon} />
                <InputContainer />
            </div>
        )
    }
}
