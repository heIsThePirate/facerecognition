import React, { Component } from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
	render(){
		return(
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input type='text' className='f4 pa2 w-70 center' onChange={this.props.onInputChange}/>
					<button onClick={this.props.onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
		);
	}
}

export default ImageLinkForm;