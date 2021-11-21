import React from 'react'
import './style.css'

// Import React Redux
import { connect } from 'react-redux'

function Contact({user}){
    return(
        <div>
            <h1>Contact</h1>
            <h2>{user.email}</h2>
        </div>
    )
}
export default connect(state => ({user:state.user}))(Contact)