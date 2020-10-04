import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const buttonStyles = {
    buttonStyle: {
      background: 'linear-gradient(45deg, #ff0808 30%, #871c1c 90%)',
      borderRadius: 15,
      border: 0,
      color: 'white',
      height: 60,
      width: 300,
      padding: '0px 60px',
      margin: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    },
  };

const useStyles = makeStyles((theme) => ({
        root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2)
        }
}));

function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if(anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={ trigger }>
            <div onClick={ handleClick } role="presentation" className={classes.root}>
                { children }
            </div>
        </Zoom>
    );
}

const NavBar = (props) =>{
    const { classes, children, className } = props;
    return (
        <React.Fragment>
            <CssBaseline/>
                <AppBar position="sticky">
                    <Toolbar>
                        {/* <Typography variant='h6'> This will be the navigation</Typography> */}
                        <Button className={clsx(classes.root, className)} size="large" variant="contained" component={Link} to="/" >
                            Home
                        </Button>
                    </Toolbar>
                </AppBar>
                <Toolbar id='back-to-top-anchor'/>
            <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="grey" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
        </React.Fragment>
    );
}

export default withStyles(buttonStyles)(NavBar);