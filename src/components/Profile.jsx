import React, { Component } from 'react'
import User from './User'
import Pallette from './Pallette'

export default class Profile extends Component {
    render() {
        return (
            <div className="container profile">
                <User src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="Name" name="Name" />
                <Pallette />
            </div>
        )
    }
}
