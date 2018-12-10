import React, { Component } from 'react';

class Navigation extends Component {
	render(){
		if (this.props.isSignedIn){
		return(
			<nav style={{display: 'flex', justifyContent:'flex-end'}}>
				<p onClick={() => this.props.onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
			);
		} else {
		return(
			<nav style={{display: 'flex', justifyContent:'flex-end'}}>
				<p onClick={() => this.props.onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
				<p onClick={() => this.props.onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
			</nav>
			);
		}
	}
}

export default Navigation;