import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withStateHandlers } from 'recompose';

const mapStateToProps = (state) => ({
  loans: state.loans.loans
});

export default compose(
  connect(mapStateToProps),
  withStateHandlers(
    { averagePrice: null },
    {
      setAvarageLoansPrice: ({ averagePrice }) => newPrice => ({
        averagePrice: newPrice
      })
    }
  ),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.loans !== this.props.loans) {
        const newAveragePrice = this.props.loans.reduce((prev, curr) => prev + curr.amount, 0) / this.props.loans.length;

        this.props.setAvarageLoansPrice(newAveragePrice);
      }
    }
  })
);
