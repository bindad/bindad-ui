import * as React from 'react';
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Card, CardHeader, Checkbox, createStyles, FormControl, FormControlLabel, FormHelperText, Grid, Input, InputBase, InputLabel, Link, makeStyles, Paper, TextField, Theme, ThemeProvider, Toolbar, Typography, withStyles, WithStyles } from '@material-ui/core';
import { CardBody, CardGroup, Form } from 'reactstrap';

const styles = (theme: Theme) => createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
    },
  });

interface Props extends WithStyles<typeof styles> {}
interface State {}

export class Dashboard extends Component<Props, State> {
    hideActionsCard = false;

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar position="sticky" color="transparent" className={classes.root}>
                    <Toolbar><Typography variant="h5">Welcome BoringBits</Typography></Toolbar>
                </AppBar>
                <div hidden={this.hideActionsCard}>
                    <Card variant="outlined">
                        <CardBody>
                            <Link href="#" onClick={this.onAddNewStaffMember} color="secondary">Onboard New Staff Member</Link>
                        </CardBody>
                    </Card>
                </div>
                <div hidden={!this.hideActionsCard}>
                    <Card variant="outlined">
                        <CardBody>
                            <Typography variant="h6">Please fill in the details:</Typography>
                        <p />
                            <Form>
                                <Paper variant="outlined" elevation={2} >
                                    <Grid container alignItems="flex-start" spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                // fullWidth
                                                required
                                                name="firstName"
                                                type="text"
                                                label="First Name"
                                                color="secondary"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                // fullWidth
                                                required
                                                name="lastName"
                                                type="text"
                                                label="Last Name"
                                                color="secondary"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                name="email"
                                                fullWidth
                                                required
                                                type="email"
                                                label="Email"
                                                color="secondary"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel label="Employed"
                                                control={
                                                    <Checkbox name="employed" />
                                                }
                                            />
                                        </Grid>
                                        <Grid item style={{ marginTop: 16 }}>
                                            <Button variant="contained">
                                                Reset
                                            </Button>
                                        </Grid>
                                        <Grid item style={{ marginTop: 16 }}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Form>
                            <p />
                            <Link href="#" onClick={this.onBackToDashboard} color="secondary">Go Back</Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }

    private onAddNewStaffMember = () => {
        this.hideActionsCard = true;
        this.forceUpdate();
    };

    private onBackToDashboard = () => {
        this.hideActionsCard = false;
        this.forceUpdate();
    };


}

export default withStyles(styles)(Dashboard)