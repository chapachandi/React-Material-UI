import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery, Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: "40px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Grid container={3}>
                    <Grid xs={11} sm={11} md={8} lg={8} xl={9}>
                        <Typography variant="h4" className={classes.logo}>
                            Navbar
                        </Typography>
                    </Grid>
                    <Grid xs={1} sm={1} md={4} lg={4} xl={3}>

                        {isMobile ? (
                            <DrawerComponent style={{right:0}} />
                        ) : (
                            <div className={classes.navlinks}>

                            <Link to="/" className={classes.link}>
                                Home
                            </Link>


                            <Link to="/customer" className={classes.link}>
                                Customer
                            </Link>


                            <Link to="/item" className={classes.link}>
                                Item
                            </Link>

                            <Link to="/login" className={classes.link}>
                                Login
                            </Link>
                            </div>
                        )}

                        </Grid>
                </Grid>


            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
