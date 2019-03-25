import '@babel/polyfill';

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  message: {
    padding: 15,
    textAlign: 'center',
    color: theme.palette.error.main
  }
});

const ErrorMessage = ({ classes, errorMessage }) => (
  <Typography className={classes.message}>
    {errorMessage}
  </Typography>
);

ErrorMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default withStyles(styles)(ErrorMessage);
