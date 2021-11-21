import React from 'react'
import './style.css'

// Import React Router Dom
import {Link, Outlet} from 'react-router-dom'

// Import React Redux
import { connect } from 'react-redux'

function Help({user}){
    return(
        <div>
            <h2>Help</h2>
            <h2>{user.senha}</h2>
            <Link to='/help/name'>Nome</Link>
            <Link to='/help/email'>Email</Link>
            <Link to='/help/foto'>Foto</Link>
            <Outlet/>
        </div>
    )
}
export default connect(state => ({user:state.user}))(Help)