import '@babel/polyfill';

import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress, withStyles } from '@material-ui/core';

const styles = () => ({
  loader: {
    position: 'fixed',
    width: '100%'
  }
});

const Loader = ({ classes }) => <LinearProgress color="secondary" className={classes.loader} />;

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(Loader);
