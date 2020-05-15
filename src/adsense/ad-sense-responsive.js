import React from 'react';

class AdSenseResponsive extends React.Component {

	componentDidMount () {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render () {

		return (
			<div className="ad-sense">
				<div className='ad'>
					<ins className='adsbygoogle ad-sense-ins' 
						data-ad-client={this.props.client}
						data-ad-slot={this.props.slot}
						// data-ad-format={this.props.format} 
						/>
				</div>
			</div>
		)
	}
}

export default AdSenseResponsive;