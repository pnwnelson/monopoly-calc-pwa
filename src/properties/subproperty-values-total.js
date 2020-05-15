import React from 'react';
//import { Form, Grid } from 'react-bootstrap';

class SubPropertyValuesTotal extends React.Component {

  // Child to Property.
  // This should show the user the total valuation of the property once they select the drop down menu

  render() {
  // need code to add up selection from <PropertyValues /> and display in a div
  	const subPropertyValueTotal = this.props.subPropertyValueTotal

    return (
        <div className="property-value-total-box-container">
        	<div className="value-amount">
        		${subPropertyValueTotal}
        	</div>
        </div>
      )
  }
}

export default SubPropertyValuesTotal;