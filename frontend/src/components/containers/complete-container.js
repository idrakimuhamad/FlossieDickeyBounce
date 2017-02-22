import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CompleteContainer extends Component {
	_fixedDecimal = (number) => {
		return number.toFixed(2);
	}

  render() {
    return (
      <div>				
        {this.props.totalPrice ?
					<div>
						<h2 className="f3 f2-ns lh-copy">Total Price: ${this._fixedDecimal(this.props.totalPrice)}</h2>
						<p className="f6 lh-copy">Your checkout has been completed. <a href="/">Start over again</a>.</p>
					</div>
					:
					<p className="lh-copy f6">
						You have no item added into the cart. <a href="/">Start over</a>.
					</p>
				}
      </div>
    );
  }
}

const mapStateToProps = function(store) {
	return {
		totalPrice: store.checkoutState.totalPrice
	};
};

export default connect(mapStateToProps)(CompleteContainer);
