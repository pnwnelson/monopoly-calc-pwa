import React from 'react';

// Dynamically creating an input field (and it's label) for bill calculation.
// Sibling to <BillSubTotal />
// Parent is <CashItemList />

class CashItem extends React.Component {

	constructor(props) {
    super(props)
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) { // This is part of changing subtotal props.
		let count = event.target.value;
		let billSubTotal = this.props.bill.amount * count; // Multiplying the bill value with the number of that bill  (e.g $50 x 3)
		this.props.onChange(billSubTotal); // this is passed as the newBillSubTotal variable in <CashItemsList />
	}

	render() {

		const { bill } = this.props

		return (
			<form className="flex flex-row items-center">
				<img src={bill.billImage} alt={bill.imgAlt} className="cash-label text-right mr2" /> x
				<input className="cash-number bn" type="number" onChange={this.handleInput} placeholder="#"/>
			</form>
		)
	}
}

export default CashItem;