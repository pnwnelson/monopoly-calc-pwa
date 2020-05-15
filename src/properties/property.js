import React from "react";
import PropertyValues from "./property-values";
import PropertyName from "./property-name";
import PropertyValuesTotal from "./property-values-total";

// This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
// This should be a child to <App />

class Property extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      propertyValueTotal: ''
    }
    this.changeValueTotal = this.changeValueTotal.bind(this);
  }

  changeValueTotal(newValueTotal) {
    // This changes the subtotal value of each Property component
    this.setState({
      propertyValueTotal: newValueTotal
    });
    this.props.onChange(this.props.property.id, newValueTotal);
  }

  render() {
    const { property } = this.props;

    return (
      <div className="flex flex-row items-center ma2">
        <PropertyName property={property} />
        <PropertyValues
          property={property}
          onClick={this.changeValueTotal}
        />
        <PropertyValuesTotal
          propertyValueTotal={this.state.propertyValueTotal}
        />
      </div>
    );
  }
}

export default Property;
