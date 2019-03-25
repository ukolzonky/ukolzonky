import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { Typography, ListItem, withStyles } from '@material-ui/core';

const styles = theme => ({
  item: {
    width: 'auto',
    marginBottom: 15,
    cursor: 'pointer',
    background: blueGrey[50],
    '&:hover': {
      background: '1px solid #333'
    }
  },
  itemLabel: {
    width: '100%',
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 300
  }
});


const RatingItem = ({ classes, ratingLabel, ratingId, selectedRatings, onRatingClick }) => (
  <ListItem
    selected={selectedRatings.indexOf(ratingId) >= 0}
    className={classes.item}
    onClick={onRatingClick}
  >
    <Typography
      color="inherit"
      align="center"
      className={classes.itemLabel}
    >
      {ratingLabel + '%'}
    </Typography>
  </ListItem>
);

RatingItem.defaultProps = {
  onRatingClick: () => {}
};

RatingItem.propTypes = {
  classes: PropTypes.object.isRequired,
  ratingId: PropTypes.string.isRequired,
  ratingLabel: PropTypes.string.isRequired,
  onRatingClick: PropTypes.func
};

export default compose(
  withStyles(styles),
  withHandlers({
    onRatingClick: ({ onRatingItemClick, ratingId }) => () => onRatingItemClick(ratingId)
  })
)(RatingItem);
