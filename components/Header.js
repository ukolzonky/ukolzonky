import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Avatar, withStyles } from '@material-ui/core';

import Container from './Container';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  appBar: {
    marginBottom: 50
  },
  header: {
    width: '100%',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight
  },
  avatar: {
    display: 'flex',
    alignItems: 'center'
  },
  avatarLabel: {
    paddingRight: 10,
    color: 'inherit',
    fontSize: theme.typography.h6.fontSize
  }
});

const Header = (props) => {
  const { classes, avatarSrc } = props;

  return (
    <AppBar className={classes.appBar} position="static">
      <Container>
        <Grid>
          <Toolbar>
            <Typography
              variant="h1"
              color="inherit"
              align="center"
              className={classes.header}
            >
              Průměrná výše půjčky
            </Typography>

            {
              avatarSrc &&
              <Grid className={classes.avatar}>
                <Typography className={classes.avatarLabel}>
                  Zonky
                </Typography>
                <Avatar
                  src={avatarSrc}
                />
              </Grid>

            }
          </Toolbar>
        </Grid>
      </Container>
    </AppBar>
  );
}

Header.defaultProps = {
  avatarSrc: null
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarSrc: PropTypes.string
};

export default withStyles(styles)(Header);
