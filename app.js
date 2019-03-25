import React, { Fragment } from 'react';
import { compose, branch, renderNothing } from 'recompose';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store';

import configuration from './configuration';

import withLoansManager from './hoc/withLoansManager';
import withAverageLoansAmount from './hoc/withAverageLoansAmount';
import Container from './components/Container';
import Header from './components/Header';
import avatarSrc from './utils/avatar-src';
import RatingBlock from './components/RatingBlock';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import AveragePriceBlock from './components/AveragePriceBlock';

const ratings = configuration.ratings;
const EnhancedRatingBlock = withLoansManager(RatingBlock);
const EnhancedAveragePriceBlock = compose(
  withAverageLoansAmount,
  branch(
    ({ averagePrice }) => !averagePrice,
    renderNothing
  )
)(AveragePriceBlock);
const EnhancedLoader = compose(
  connect(state => ({ loading: state.loans.loading })),
  branch(
    ({ loading }) => !loading,
    renderNothing
  )
)(Loader);
const EnhancedErrorMessasge = compose(
  connect(state => ({ errorMessage: state.loans.error })),
  branch(
    ({ errorMessage }) => !errorMessage,
    renderNothing
  )
)(ErrorMessage);

const App = (
  <Provider store={store}>
    <Fragment>
      <EnhancedLoader />
      <Header avatarSrc={avatarSrc} />

      <Container>
        <EnhancedRatingBlock ratings={ratings} />
        <EnhancedErrorMessasge />
        <EnhancedAveragePriceBlock />
      </Container>
    </Fragment>
  </Provider>
);

const currentFilters = document.querySelector('#app');

ReactDOM.render(App, currentFilters);
