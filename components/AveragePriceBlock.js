import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, withStyles } from '@material-ui/core';

import formatePrice from '../utils/formatePrice';

const styles = theme => ({
  block: {
    padding: 25
  },
  labelText: {
    textAlign: 'center',
    fontSize: theme.typography.h6.fontSize
  },
  labelPrice: {
    textAlign: 'center',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 500
  }
});

const AveragePriceBlock = ({ classes, averagePrice }) => (
  <Paper className={classes.block}>
    <Typography className={classes.labelText}>
      {'Průměrná cena půjček'}
    </Typography>
    <Typography className={classes.labelPrice}>
      {formatePrice(averagePrice) + 'Kč'}
    </Typography>
  </Paper>
);

AveragePriceBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  averagePrice: PropTypes.number.isRequired
};

export default withStyles(styles)(AveragePriceBlock);
