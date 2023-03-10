import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../Components/PrimaryButton";
const Login = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 w-96 items-center mx-auto mt-16">
        {/* register your input into the hook by invoking the "register" function */}
        <input  className="input input-bordered" type={"email"} placeholder="Email" {...register("example",{required:true})} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input  className="input input-bordered" type={"password"} placeholder="Email"  {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}    
        <PrimaryButton type="submit" >Login</PrimaryButton>
        <p className="text-center">New to Doctors Portal?<span className="text-primary"><Link> Create new Account </Link></span></p>
        <p className="text-center">....................OR.....................</p>
        <PrimaryButton type="submit" >CONTINUE WITH GOOGLE</PrimaryButton>
        
      </form>
    );
  }

export default Login;
