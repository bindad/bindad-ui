import * as React from 'react';
import Header from './Header';
import Navigation from './navigation/Navigation';
import Main from './Main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: teal[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

export class Home extends React.Component {
    render() {
        return (
            <div className="fixed-layout">
                <ThemeProvider theme={theme}>
                    <Header/>
                    {/* <Navigation /> */}
                </ThemeProvider>
                {/* <Main /> */}
            </div>
        );
    }
}