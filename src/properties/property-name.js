import React from 'react';

class PropertyName extends React.Component {

  // Child to Property.
  // This should show the names of each monopoly Property and include their colors via JSON className property.

  render() {

    const fullName = this.props.property.name

    return (
        <div className="flex">
          <div className={this.props.property.className + " flex self-center"}>
            <span className="self-center center">{fullName}</span>
          </div>
        </div>
    )
  }
}

export default PropertyName;