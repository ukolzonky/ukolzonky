import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withStateHandlers } from 'recompose';

import { getLoansByRatingId, clearLoans } from '../redux/reducers/loansReducer';

const mapStateToProps = (state) => ({
  loans: state.loans.loans
});

const mapDispatchToProps = dispatch => ({
  getLoansByRating: ratingId => dispatch(getLoansByRatingId(ratingId)),
  clearLoansStore: () => dispatch(clearLoans())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      selectedRatings: []
    },
    {
      onRatingItemClick: ({ selectedRatings }) => ratingId => ({
        selectedRatings: selectedRatings.indexOf(ratingId) >= 0
          ? selectedRatings.filter(id => id !== ratingId)
          : [ ...selectedRatings, ratingId ]
      })
    }
  ),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.selectedRatings !== this.props.selectedRatings) {
        let query = '';

        if (this.props.selectedRatings.length > 0) {
          query = `?rating__in=${encodeURIComponent(JSON.stringify(this.props.selectedRatings))}`;
          this.props.getLoansByRating(query);
        } else {
          this.props.clearLoansStore();
        }
      }
    }
  })
);
