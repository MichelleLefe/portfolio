import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

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

// function HideOnScroll(props) {
//     const { children } = props;
//     const trigger = useScrollTrigger();//
//     return (
//         <Slide in={!trigger}> 
//          {children}
//         </Slide>
//     );
// }

export default function NavBar(props) {
    return (
        <React.Fragment>
            <CssBaseline/>
            {/* <HideOnScroll { ...props }> */}
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant='h6'> This will be the navigation</Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar id='back-to-top-anchor'/>
            {/* </HideOnScroll> */}
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
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
        </React.Fragment>
    );
}