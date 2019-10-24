import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://cdn3.movieweb.com/i/article/yYh0SmYwga2EJ0o2T6MgVw3qtsgKxL/798:50/Why-Chloe-Moretz-Exits-All-Upcoming-Movies.jpg" alt="cloe" />
                <Post src="https://pmcdeadline2.files.wordpress.com/2017/02/chloe-grace-moretz.jpg" alt="cloe" />
            </div>
        )
    }
}
