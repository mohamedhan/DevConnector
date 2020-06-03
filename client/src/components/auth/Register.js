import React,{useState} from 'react';
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
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import PropTypes from 'prop-types'
import {register} from '../../actions/auth'
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function Register(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })
  const {name,email,password,password2}=formData
  const onchange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  const onsubmit=async()=>{
    if(password!==password2){
      // console.log('pass does not match')
      //danger in css
      props.setAlert("pass does not match",'danger')
    }
    else {
      props.register({name,password,email})
     
    }
  }

  //redirect 
  if(props.isAuthenticated){
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
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                value={name}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="name"
                autoFocus
                onChange={onchange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="email"
                name="email"
                value={email}
                autoComplete="lname"
                onChange={onchange}

              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onchange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                value={password2}
                label="confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onchange}

              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>onsubmit()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
             <Link to="/login"> <Linkk variant="body2">
                Already have an account? Sign in
              </Linkk></Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
Register.protoTypes={
  setAlert:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{setAlert,register}) (Register)