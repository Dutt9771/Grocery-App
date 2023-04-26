import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';
const initialvalues ={
  name:'',
  email:'',
  password:'',
  confirmpassword:''
}

export default function Register(){

    const Registrationschema= Yup.object({
        name:Yup.string().min(2).max(25).required('Name is required'),
        email:Yup.string().email().required('Email is required'),
        password:Yup.string().min(6).required('Password is required'),
        confirmpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
      })
      
      const navigate = useNavigate();
let token= sessionStorage.getItem("token");

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialvalues,
    validationSchema:Registrationschema,
    onSubmit:(values,action)=>{
      if(!token){

        console.log(values)
        const options = {
        method: 'post',
        url: 'http://localhost:8080/api/v1/admin/register',
        data: values
      };
      
      axios.request(options).then(function (response) {
        if(response){
          
          console.log(response.data);
          toast.success("Register Successfully",{
            position: "bottom-center",
            duration: 3000
          })
          navigate('/login')
        }
      }).catch(function (error) {      
        console.error(error.response.data.message);
        toast.error(error.response.data.message ? error.response.data.message : "Error With Register",{
          position: "bottom-center",
          duration: 3000
        })
      });
      action.resetForm();
    }else{
      toast.error("You are already Register,Please Login",{
        position: "bottom-center",
        duration: 3000
      })
      navigate('/login')
    }
  }
  })
  
  console.log("values",values)
    return (
      <form action="post" onSubmit={handleSubmit} noValidate
      autoComplete="off" >
        <div><Toaster/></div>
        {/* component="form" */}
        <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',

      }}
      
      noValidate
      autoComplete="off"
    >

      {/* <div>
       <label htmlFor="name">Name</label>
       <input type="text" id='name' name='name' placeholder='Enter name'/>
      </div> */}
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          name='name'
          type='text'
          multiline
          maxRows={4}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'
        />
      </div>
      <div style={{color:'red'}}>
      {errors.name && touched.name ? errors.name : null}
      </div>
      <div>
        <TextField
          id="outlined-email-input"
          label="Email"
          name='email'
          type='email'
          maxRows={4}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'


        />
      </div>
      <div style={{color:'red'}}>
      {errors.email && touched.email ? errors.email : null}
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name='password'
          maxRows={4}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'

        />
      </div>
      <div style={{color:'red'}}>
      {errors.password && touched.password ? errors.password : null}
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          name='confirmpassword'
          maxRows={4}
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'

        />
      </div>
      <div style={{color:'red'}}>
      {errors.confirmpassword && touched.confirmpassword ? errors.confirmpassword : null}
      </div>
      <div>
      <Button variant="outlined" type='submit' style={{marginTop:'10px',marginRight:'20px'}}>Register</Button>
      <Link to="/login">
 <Button variant="outlined" type='submit' style={{marginTop:'10px'}} >Already Register</Button>
 </Link>
      </div>
    </Box>
       </form>
    
    )
}