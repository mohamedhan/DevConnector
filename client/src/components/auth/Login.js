
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Linkk from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {login } from '../../actions/auth'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Linkk color="inherit" href="https://material-ui.com/">
        Your Website
      </Linkk>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 const  Login=({login,isAuthenticated})=> {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })
  const {email,password}=formData
  const onchange=(e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }
  const onsubmit=async()=>{
    login(email,password)
    // const user={email,password}
    // try {
    //   const res=await axios.post('/api/auth/',user)
    //   console.log(res.data)
    // } catch (err) {
    //   console.error(err.message.data);
    // }
  }
  //Redirect if logged in 
  if(isAuthenticated){
    return <Redirect to="/dashboard" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onchange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onchange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onsubmit}
          >
            Sign In
          </Button>
          <Grid container>
            
            <Grid item>
             <Link to="/register"><Linkk  variant="body2" >
                {"Don't have an account? Sign Up"}
              </Linkk></Link> 
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
 
Login.propTypes={
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
}
const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login)