import React, { Component } from 'react'
import User from './User'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="Name" name="Name" min />
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
