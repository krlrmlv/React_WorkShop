import React, { Component } from 'react'
import Posts from './Posts'
import Users from './Users'

export default class Feed extends Component {
    render() {
        return (
            <div className="container feed">
                <Posts />
                <Users />
            </div>
        )
    }
}
