import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
  container: {
    maxWidth: 960,
    width: '100%',
    margin: '0 auto'
  }
});

const Container = (props) => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);