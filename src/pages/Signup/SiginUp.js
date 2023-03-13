import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";

const SiginUp = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();

  const {createUser}= useContext(AuthContext)

  const onSubmit = (data) => {
    
    console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
        const user= result.user;
        console.log(user);
    })
    .catch(error=>console.error(error));
  }


  return (
    <div className="mt-16">
      <h1 className="text-xl text-center">SIGNUP</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 w-96 items-center mx-auto mt-16"
      >


        {/* register your input into the hook by invoking the "register" function */}
        <label className="lavel"><span className="lavel-text">Name</span></label>
        <input
          className="input input-bordered"
          type={"name"}
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-600">{errors.name?.message}</p>
        )}


        {/* register your input into the hook by invoking the "register" function */}
        <label className="lavel"><span className="lavel-text">Email</span></label>
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
        <label className="lavel"><span className="lavel-text">Password</span></label>
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




        <input className="btn btn-accrnt" type="submit" value="SignUp" />
        <p className="text-center">
          Alradey have an account
          <span className="text-primary">
            <Link to="/login"> place login </Link>
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

export default SiginUp;
