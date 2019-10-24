import React, { Component } from 'react'
import User from './User'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Wiki-analsex.png" alt="anal" name="analsex" min />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    User 
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum itaque ipsam error? Iusto sapiente dolore sequi praesentium, ipsam quisquam beatae quod accusamus eligendi corporis, aut voluptates, et animi incidunt.
                </div>
            </div>
        )
    }
}
