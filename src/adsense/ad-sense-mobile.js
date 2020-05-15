import React from 'react';

class AdSenseMobile extends React.Component {

	componentDidMount () {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render () {

		// const style = {
		// 	width: '320px',
		// 	height: '50px'
		// }

		return (
			<div className="ad-sense-mobile">
				<div className='ad'>
					<ins className='adsbygoogle ad-sense-mobile-ins'
						// style={style}
						data-ad-client={this.props.client}
						data-ad-slot={this.props.slot}
						data-ad-format={this.props.format} />
				</div>
			</div>
		)
	}
}

export default AdSenseMobile;

