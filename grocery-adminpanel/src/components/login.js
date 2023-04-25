import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
const initialvalues ={
  email:'',
  password:'',
}

export default function Login(){

    const Loginschema= Yup.object({
        email:Yup.string().email().required('Email is required'),
        password:Yup.string().min(6).required('Password is required'),
    })

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialvalues,
    validationSchema:Loginschema,
    onSubmit:(values,action)=>{
      console.log(values)
      const options = {
        method: 'post',
        url: 'http://localhost:8080/api/v1/admin/login',
        data: values
      };
      
      axios.request(options).then(function (response) {
        if(response){
         console.log(response.data);
         toast.success(response.message,{
          position: "bottom-center",
          duration: 3000
        })
    }
      }).catch(function (error) {
        console.error(error);
        toast.error(error.response.data.message ? error.response.data.message :"Error With Login",{
          position: "bottom-center",
          duration: 3000
        })
      });
      action.resetForm();
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
      <Button variant="outlined" type='submit' style={{marginTop:'10px'}}>Login</Button>

      </div>
    </Box>
       </form>
    
    )
}