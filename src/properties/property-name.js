import React from 'react';
//import { Grid } from 'react-bootstrap';

class PropertyName extends React.Component {

  // Child to Property.
  // This should show the names of each monopoly Property and include their colors via JSON className property.

  render() {

    const abbrName = this.props.property.abbrName // Showing just the first three letters of Property name.
    const fullName = this.props.property.name

    return (
        <div className="flex">
          {/* <div className={this.props.property.className + " flex dn-l self-center"}>
            <span className="self-center center">{abbrName}</span>
          </div> */}
          <div className={this.props.property.className + " flex self-center"}>
            <span className="self-center center">{fullName}</span>
          </div>
        </div>
    )
  }
}

export default PropertyName;