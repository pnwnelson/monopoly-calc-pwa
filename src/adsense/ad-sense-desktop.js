import React from 'react';

class AdSenseDesktop extends React.Component {

	componentDidMount () {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render () {

		const style = {
			width: '728px',
			height: '90px'
		}

		return (
			<div className="ad-sense">
				<div className='ad'>
					<ins className='adsbygoogle ad-sense-desktop-ins' 
						style={style}
						data-ad-client={this.props.client}
						data-ad-slot={this.props.slot} />
				</div>
			</div>
		)
	}
}

export default AdSenseDesktop;

