import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
    render() {
        return (
            <div className="right">
                <User src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Wiki-analsex.png" alt="anal" name="analsex" />

                <div className="users__block">

                      <User src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Wiki-analsex.png" alt="anal" name="analsex" min />
                      <User src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Wiki-analsex.png" alt="anal" name="analsex" min />
                      <User src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Wiki-analsex.png" alt="anal" name="analsex" min />
                      <User src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Wiki-analsex.png" alt="anal" name="analsex" min />
                </div>
            </div>
        )
    }
}
