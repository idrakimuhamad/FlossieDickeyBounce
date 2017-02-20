import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerList from '../views/customers-list';
import * as customerApi from '../../api/customer-api';

export class CustomerListContainer extends Component {
	componentDidMount() {
		customerApi.getCustomers();
	}

  render() {
    return (
      <CustomerList loading={this.props.customerLoading} customers={this.props.customers} />
    );
  }
}

const mapStateToProps = function(store) {
	return {
		customers: store.customersState.customers,
		customerLoading: store.customersState.customerLoading
	};
};

export default connect(mapStateToProps)(CustomerListContainer);
