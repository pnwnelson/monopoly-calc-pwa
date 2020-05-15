import React from 'react';
import SubPropertyValues from './subproperty-values';
import SubPropertyName from './subproperty-name';
import SubPropertyValuesTotal from './subproperty-values-total';

// This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
// This should be a child to <App />

class SubProperty extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subPropertyValueTotal: ''
    }
    this.changeSubValueTotal = this.changeSubValueTotal.bind(this);
  }

  changeSubValueTotal(newSubValueTotal) { // This changes the subtotal value of each Property component
    this.setState ({
      subPropertyValueTotal: newSubValueTotal
    })
    this.props.onChange(this.props.subproperty.id, newSubValueTotal);
  }

  render() {

    const { subproperty } = this.props

    return (
      
      <div className="flex flex-row items-center ma2">
        <SubPropertyName subproperty={subproperty} />
        <SubPropertyValues subproperty={subproperty} onClick={this.changeSubValueTotal} />
        <SubPropertyValuesTotal subPropertyValueTotal={this.state.subPropertyValueTotal} />
      </div> 
    );
  }
}

export default SubProperty;