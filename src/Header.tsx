import React, { Dispatch } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { createStyles, Menu, MenuItem, Tab, Toolbar, useTheme, withStyles, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import logo from './images/logo.png'
import { App } from './App';
import AppState from './store/appState';
import { connect } from 'react-redux';
import * as classnames from 'classnames';
import { NavItems } from './actions/navActions';
import { AnyAction } from 'redux';

const styles = (theme: Theme) => createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
    },
  });

declare namespace Header {
    interface Props extends WithStyles<typeof styles> {
        dispatch: Dispatch<AnyAction>,
        activeNav: string,
    }

    interface State {
        theme?: string
    }
};

class Header extends React.Component<Header.Props, Header.State> {
    render() {
        const { classes } = this.props;

        return (
            <header>
                <AppBar variant="elevation">
                    <Toolbar>
                        {this.getAppBarItem(NavItems.Dashboard)}
                        {this.getAppBarItem(NavItems.YourInfo)}
                        {this.getAppBarItem(NavItems.Reports)}
                        {this.getAppBarItem(NavItems.Settings)}
                    </Toolbar>
                </AppBar>
            </header>
        )
    }

    private getAppBarItem = (navItem: string) => {
        const { activeNav } = this.props;

        return (
            // <Button variant="text" className={activeNav == navItem ? '' : ''}><Typography>{navItem}</Typography></Button>
            <Tab color="secondary"> {navItem}</Tab>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    const { navState } = state;

    return {
        activeNav: navState.tab
    };
};

export default withStyles(styles)(connect(mapStateToProps)(Header));

// export default function Header() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     return (
//         <div className={classes.root}>
//             <AppBar position="static" color="transparent">
//                 <Toolbar>
//                     <img src={logo} />
//                     <div className={classes.logoutButton}>
//                         <Button color="secondary">Logout</Button>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }