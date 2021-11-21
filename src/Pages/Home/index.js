import React from 'react'
import './style.css'

// Import React Router Dom
import {Link, Outlet} from 'react-router-dom'

// Import React Redux
import { connect } from 'react-redux'

function Home({user, dispatch}){

    function handleSetNome(nome){
        return {
            type: 'SET_USER_NAME',
            user: {nome, email:user.email, senha:user.senha}
        }
    }

    return(
        <div>
            <h1>Home</h1>
            <h2>{user.nome}</h2>
            <button onClick={() => dispatch(handleSetNome("Joao"))}>Set Nome Para Joao</button>
            <button onClick={() => dispatch(handleSetNome("Caio"))}>Set Nome Para Caio</button>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/help'>Help</Link>
            <Outlet/>
        </div>
    )
}
export default connect(state => ({user:state.user}))(Home)