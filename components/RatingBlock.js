import '@babel/polyfill';

import React from 'react';
import PropTypes from 'prop-types';
import { List, withStyles } from '@material-ui/core';

import RatingItem from './RatingItem';

const styles = () => ({
  block: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 35
  }
});

const RatingBlock = ({ classes, ratings, onRatingItemClick, selectedRatings }) => (
  <List className={classes.block}>
    {
      ratings.length > 0 && ratings.map(ratingItem => (
        <RatingItem
          key={ratingItem.id}
          ratingLabel={ratingItem.label}
          ratingId={ratingItem.id}
          onRatingItemClick={onRatingItemClick}
          selectedRatings={selectedRatings}
        />
      ))
    }
  </List>
);

RatingBlock.defaultProps = {
  ratings: [],
  onRatingItemClick: () => {}
};

RatingBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  ratings: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })),
  onRatingItemClick: PropTypes.func
};

export default withStyles(styles)(RatingBlock);
