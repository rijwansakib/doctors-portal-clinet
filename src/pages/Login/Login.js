import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
const Login = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();
  const {signin} =useContext(AuthContext)
  const [loginError,setLoginError]=useState('')

  const onSubmit = (data) =>{
    console.log(data);
    setLoginError('');
    signin(data.email,data.password)
    .then(result=>{
      const user=result.user
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
      setLoginError(error.message)
    });
  }

  return (
    <div className="mt-16">
      <h1 className="text-xl text-center">LOGIN</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 w-96 items-center mx-auto mt-16"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="input input-bordered"
          type={"email"}
          placeholder="Email"
          {...register("email", { required: "Email Address is required" })}
        />
        {errors.email && (
          <p className="text-red-600">{errors.email?.message}</p>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="input input-bordered"
          type={"password"}
          placeholder="Password"
          {...register("password", {
            required: "Password  is required",
            minLength: {
              value: 6,
              message: "password must be 6 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password?.message}</p>
        )}
        <div>
          {
            loginError && <p className="text-red-600">{loginError}</p>
          }
        </div>
        <input className="btn btn-accrnt" type="submit" value="Login" />
        <p className="text-center">
          New to Doctors Portal?
          <span className="text-primary">
            <Link to="/signup"> Create new Account </Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline" type="submit">
          CONTINUE WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default Login;
