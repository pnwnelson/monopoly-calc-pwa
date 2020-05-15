import React from 'react';

// Component to show the subtotal for each bill ($500, $100, $50, etc)
// Sibling to <CashItem />
// Parent is <CashItemList />

class BillSubTotal extends React.Component {

	render () {

		function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    const subTotalWithCommas = numberWithCommas(this.props.billSubTotal)

		return (
			<div className="flex items-center cash-subtotal ml3">
				= ${subTotalWithCommas}
			</div>
		)
	}
}

export default BillSubTotal;