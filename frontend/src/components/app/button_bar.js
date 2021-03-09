    
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
        logout: () => {logout()(dispatch)},
    }
}

function ButtonBar(props) {
return (
    <div className="buttonbar">
    <div>
        <button title="Home" onClick={()=>props.history.push('/')}>
            <span title="Home" aria-label="Home" role="img">
                🏡
            </span>
        </button> 
        { props.loggedIn
        ? <button title="Sign-out" onClick={()=>props.logout()}>
            <span title="Sign-out" aria-label="Sign-out" role="img">
                🚪
            </span>
        </button>
        : "" }
    </div>
    <a href="https://github.com/hechtoid/Bingo" title="View Source on GitHub" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" />
    </a>
    </div>
   )
}

export default connect(msp, mdp)(withRouter(ButtonBar));  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    