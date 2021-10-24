/**
 *@authar Chapa Chandi
 *@since 10/25/2021
 */
import React, { useState } from "react";
import {
    Drawer, Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
// import { Menu } from "@material-ui/icons";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText >
                            <Link to="/" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/customer"className={classes.link}>Customer</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/item" className={classes.link}>Item</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/login" className={classes.link}>Login</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <Grid xs={2} sm={2}>
                <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                    {/*<MenuIcon />*/}
                </MenuIcon>
            </Grid>
        </div>
    );
}
export default DrawerComponent;