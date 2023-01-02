import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import SuperFetch from '../../hook/Axios';
import withAuth from "../../hook/PrivateRoute";
import Cookies from 'js-cookie';
// import withAuth from "../../hook/PrivateRoute";
import Swal from 'sweetalert2'


const Login_Part = () => {
  const [errorText, setErrorText] = useState("");
  const router = useRouter()
  const defaultValues = {
      email: "",
      password: "",
  }
  const validationSchema = yup.object().shape({
      email: yup.string()
          .required()
          .email(),
      password: yup.string().required()
  });
  const {handleSubmit, register, formState: {errors}} = useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(validationSchema),

  });

  const onSubmit = (data) => {

      SuperFetch.post('/login', {email: data.email, password: data.password})
          .then(response => {
              Cookies.set('token', response.data.token)
              Cookies.set('user',  JSON.stringify(response.data.merchant))
              localStorage.setItem('token', response.data.token)
              localStorage.setItem('user', JSON.stringify(response.data.merchant))
              // console.log(response.data.merchant)

              router.push('/')
          })
          .catch(errors => {
            Swal.fire({
              position: 'top',
              icon: 'error',
              text: 'Invalid Email Address Or Password',
              timer: 1500

            })
            console.log("errors", errors)
              setErrorText("Invalid Email Address or Password");
          })
  }

  return (

    <>

      <section className='Login'>

        <div className="LoginContent">

          {/* Logo */}
          <div className="Logo">
            <img src="images/logo.svg" alt="" />
          </div>

          {/* HeaderText */}
          <div className="HeaderText">

            <h3>Welcome To {errorText}</h3>
            <p>The Best Business 360 Solution For Your Business, Just Login & You’re Ready To Go !</p>

          </div>

          {/* form Part */}
          <div className="FormPart">

            {/* E-mail Address or Phone Number */}
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="CustomeInput">
              <label>E-mail Address or Phone Number</label>
              <TextField  {...register("email")} id="outlined-basic" label="E-mail" variant="outlined" />
              {errors && <span className="text-danger">{errors.email?.message}</span>}
            </div>

            {/* Password */}
            <div className="CustomeInput">
              <label>Password</label>
              <TextField type="password"  {...register("password")} id="outlined-basic" label="Password" variant="outlined" />
              {errors &&<span>{errors.password?.message}</span>}
            </div>

            {/* Sign Up */}
            <div className="CustomeInput">
            {/* <input className='bg'  /> */}
              <Button type="submit" className='bg'>Log In</Button>
              <p>{errorText}</p>
              <p className='forgate'> <Link href=''>Forgot Password ?</Link> </p>
            </div>
            </form >

            {/* Sign Up */}
            <div className="CustomeInput">
              <p>Already Have An Account ? <Link href='https://funnelliner.com/register'>Sign In</Link> </p>
            </div>

            {/* Sign Up */}
            {/* <div className="CustomeInput">
              <h6>Login With Social Media</h6>

              <div className="LoginWith d_flex">
                <Link href=''> <BsFacebook/> </Link>
                <Link href=''> <BsGoogle/> </Link>
              </div>

            </div> */}

          </div>



        </div>

      </section>

    </>

  )

}

export default withAuth(Login_Part, {
    isProtectedRoute: false,
    redirectIfNotAuthenticated: "/login",
    redirectIfAuthenticated: "/",
});
