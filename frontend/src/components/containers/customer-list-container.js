import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerList from '../views/customers-list';
import * as customerApi from '../../api/customer-api';
import store from '../../stores/store';

class CustomerListContainer extends Component {
	componentDidMount() {
		customerApi.getCustomers();
	}

  render() {
    return (
      <CustomerList customers={this.props.customers} />
    );
  }
}

const mapStateToProps = function(store) {
	return {
		customers: store.customersState.customers
	};
};

export default connect(mapStateToProps)(CustomerListContainer);
