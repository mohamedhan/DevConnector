import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    bar:{
        position:"static"
    },
    tool:{
      display:'flex',
      justifyContent:'space-between'
    }
  }));
const Navbar = ({auth:{isAuthenticated,loading},logout}) => {
  const authLinks=(
   <div style={{display:'flex',alignItems:'center'}}> <Button color="inherit">Developpers</Button>
    <ExitToAppIcon />
    <Link to="/"> <Button onClick={logout} color="white">Logout</Button>
    </Link>
    </div>
  );
  const guestLinks=(
   <div style={{display:'flex',alignItems:'center'}}> <Button color="inherit">Developpers</Button>

    <Link to="/register"> <Button color="white">Sign up</Button></Link>

    <Link to="/login"> <Button color="white">Login</Button></Link>
    </div>
    ) ;
  const classes=useStyles();
    return (
        <div className={classes.root}>
      <AppBar className={classes.bar}  >
        <Toolbar className={classes.tool} >
        <div> <Link to="/" ><Typography variant="h6" className={classes.title}>
            DevConnector
          </Typography></Link></div>
         {
           (!loading)&& (<Fragment>{
             isAuthenticated? authLinks:guestLinks
             }</Fragment>)
         }
        </Toolbar>
      </AppBar>
    </div>
    )
}
Navbar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
  auth:state.auth
})

export default connect(mapStateToProps,{logout}) (Navbar)

