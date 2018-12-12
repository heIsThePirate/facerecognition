import React, { Component } from 'react';

class Rank extends Component {
	render(){
		return(
		<div className='white f3'>
		<div>
			{`${this.props.name}, your current rank is...`}
			</div>
			<div>
			{this.props.entries}
			</div>
		</div>
		);
	}
}

export default Rank;