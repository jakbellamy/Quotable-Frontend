import React, { Component } from 'react'
import {styles, classes} from '../styles/inputContainerStyles'
import users from '../seedUsers'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { TextField, Button } from '@material-ui/core';

let updateElementInArray = (array, id, values) => {
	return array.map( (element) => {
		if(element.id == id){
			return { ...element, ...values }
		} else {
			return element
		}
	})
}
export default class InputContainer extends Component {
    state = {
        users: users,
        quotes: []
    }

    onSubmit = () => {

    }
    render() {
        return (
            <div style={styles.container}>
                <div>
                    {this.state.users.map(user => {
                        let status = !user.submitted ? null : '#8DDCF8'
                        return( 
                            <div style={{backgroundColor: status}}>
                                <span style={styles.displayName}>{user.username}</span>
                                <div style={styles.playerLine}>    
                                    <Avatar alt={user.username} src={user.imgUrl} className={classes.bigAvatar} />
                                    <TextField fullWidth/>
                                    <Button
                                        onClick={() => this.setState({
                                            users: updateElementInArray(this.state.users, user.id, {submitted: true})
                                        })}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
