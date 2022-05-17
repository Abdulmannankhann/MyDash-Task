import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './SignUp.scss'
import { useNavigate } from "react-router-dom";
import BackGroundCard from './BackGroundCard';

export default function SignUp({ setIsAuth, isAuth }) {
	const navigate = useNavigate();
	const [newUser,setNewUser] = useState({email:'',password:'',confirmPassword:'',fullName:'', phoneNumber:'',isTermAccepted:false})
	const [emailIsValid,setEmailIsValid] = useState(true)
	const [passwordMatched,setPasswordMatched] = useState(true)

	const handleEmail = (e) => {
		setNewUser(user=>({...user,email:e.target.value}))
	}

	const validateEmail = (email) =>{
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

	const checkEmail = () => {
		setEmailIsValid(validateEmail(newUser.email))
	}

	const handlePasswordMatch = () => {
		if(newUser.password === newUser.confirmPassword){
			setPasswordMatched(true)
		} else {
			setPasswordMatched(false)
		}
	}

	const handleCreateAccount = () => {
		if(emailIsValid && passwordMatched ){
			setIsAuth(true)
			console.log('login', isAuth)
		}
		if(isAuth){
			navigate('/chart')
		}
	}

  return (
	  <Box sx={{display:'flex', flexDirection:'row'}}>
	  <BackGroundCard/>
    <Box sx={{border:1,padding:10}}
	className='signup__box'
    >
		<Typography variant='h3'>Create an account</Typography>
		<br/>
		<Typography>Your mail address</Typography>
		<TextField
          error={!emailIsValid}
          id="outlined-error-helper-text"
          helperText={!emailIsValid ? "Not a valid Email." : null}
		  onChange={(e)=>handleEmail(e)}
		  onBlur={checkEmail}
		  sx={{width:'800px'}}
        />
		<br/>
		<Typography>Your password</Typography>
		<TextField
          id="outlined-error-helper-text"
		  defaultValue={newUser.password}
		  sx={{width:'800px'}}
		  onChange={(e)=>setNewUser(user=>({...user,password:e.target.value}))}
        />
		<br/>
		<Typography>Confirm your password</Typography>
		<TextField
           error={!passwordMatched}
          id="outlined-error-helper-text"
          helperText={!passwordMatched?"Password doesn't match.":null}
		  defaultValue={newUser.confirmPassword}
		  onChange={(e)=>setNewUser(user=>({...user,confirmPassword:e.target.value}))}
		  onBlur={handlePasswordMatch}
		  sx={{width:'800px'}}
        />
		<br/>
		<Typography>Your full name</Typography>
		<TextField
		 sx={{width:'800px'}}
          id="outlined-error-helper-text"
		  defaultValue={newUser.fullName}
		  onChange={(e)=>setNewUser(user=>({...user,fullName:e.target.value}))}
        />
		<br/>
		<Typography>Your phone number</Typography>
		<TextField
		  type='number'
		  sx={{width:'300px'}}
          id="outlined-error-helper-text"
		  defaultValue={newUser.phoneNumber}
		  onChange={(e)=>setNewUser(user=>({...user,phoneNumber:e.target.value}))}
        />
		<br/>
		<FormGroup>
      <FormControlLabel control={<Checkbox 
	  onChange={(e)=>setNewUser(user=>({...Box,isTermAccepted:e.target.checked}))}
	  />} label="I read and agree Terms and Conditions" />
    </FormGroup>
	<br/>
	<Button
	 variant="contained" 
	 sx={{width:'300px', height:'60px'}}
	 onClick={handleCreateAccount}
	 >Create account</Button>
	</Box>
	</Box>
  );
}