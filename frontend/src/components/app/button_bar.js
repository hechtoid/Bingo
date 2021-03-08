    
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const msp = state => ({
    loggedIn: state.session.isAuthenticated,
    handle: (state.session.user ? state.session.user.handle : 'guest'),
    id: (state.session.user ? state.session.user.id : 'guest'),
})

const mdp = dispatch => {
    return {
        logout: () => {logout()(dispatch); closeUserModal()},
    }
}

function ButtonBar(props) {
return (
    <div className="buttonbar">

    <button title="Home" onClick={()=>props.history.push('/')}>
        <span title="Home" aria-label="Home" role="img">
            🏡
        </span>
    </button> 
    { props.loggedIn
    ? <button title="Logout" onClick={()=>props.logout()}>
        <span title="Logout" aria-label="Logout" role="img">
            🚪
        </span>
    </button>
    : "" }
    </div>
   )
}

export default connect(msp, mdp)(withRouter(ButtonBar));  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    