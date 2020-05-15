import React from 'react';

// Child to SubProperty.
// This component should show a drop down menu to select the state (mortgaged, houses, etc) of the Property at the end of the game

class SubPropertyValues extends React.Component {

	constructor(props) {
    super(props)
    this.state = {
      value: 'Own it?'
		}
		this.handleSubValue = this.handleSubValue.bind(this);
	}

	// This handler is to pass off the selected total value of the property to the third box
	handleSubValue(event) {
		this.setState({ value: event.target.value})
		const subPropertyValueTotal = event.target.value;
		this.props.onClick(subPropertyValueTotal); // Passes value to third box
	}

	render() {

		const { unowned } = this.props.subproperty
		const { mortgaged } = this.props.subproperty
		const { owned } = this.props.subproperty

    // This menthod will let me use the value= attribute and populates the total box, but won't let me style it.
		return (
			<div className="mh2">
    		<select className="ddown" title={this.state.value} id="ddown" onChange={this.handleSubValue}>
    			<option className="unowned-box btn-selections" value={unowned}>Unowned</option>
    			<option className="mortgaged-box btn-selections" value={mortgaged}>Mortgaged</option>
    			<option className="owned-box btn-selection" value={owned}>Owned</option>
    		</select>
    	</div>
		)
	}
}

export default SubPropertyValues;