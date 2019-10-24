import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
    render() {
        return (
            <div className="right">
                <User src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="Name" name="Name" />

                <div className="users__block">

                      <User src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="Name" name="Name" min />
                      <User src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="Name" name="Name" min />
                      <User src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="Name" name="Name" min />
                      <User src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="Name" name="Name" min />
                </div>
            </div>
        )
    }
}
