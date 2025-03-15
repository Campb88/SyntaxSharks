import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { TypePrimaryStateWrapper } from "../components/TypePrimaryStateWrapper";
import "./signup.css";

// Define a simplified schema for username, email, and password
const signupSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema)
  });
  
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://syntaxsharks-backend.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error);
      }
      toast.success("Sign up successful. Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  // Display validation errors as toasts
  useEffect(() => {
    Object.keys(errors).forEach((key, index) => {
      setTimeout(() => {
        toast.error(errors[key].message);
      }, index * 1000);
    });
  }, [errors]);

  return (
    <div className="signup">
      <div className="contact-page-header">
        <img
          className="asset"
          alt="Asset"
          src="https://c.animaapp.com/ysurVnUL/img/asset-11@4x.png"
        />
        <div className="section">
          <div className="container">
            <div className="content">
              <div className="div">
                <div className="heading">Let’s Travel Together</div>
                <p className="you-can-reach-us">
                  <span className="text-wrapper">
                    Make an account and start sharing travel plans.
                  </span>
                </p>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-field">
                    <div className="div-2">
                      <label htmlFor="username" className="label-2">Username</label>
                      <div className="input-2">
                        <div className="content-2">
                          <input
                            id="username"
                            className="text"
                            name="username"
                            placeholder="Your username"
                            type="text"
                            {...register("username")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <div className="div-2">
                      <label htmlFor="email" className="label-2">Email</label>
                      <div className="input-2">
                        <div className="content-2">
                          <input
                            id="email"
                            className="text"
                            name="email"
                            placeholder="you@company.com"
                            type="email"
                            {...register("email")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <div className="div-2">
                      <label htmlFor="password" className="label-2">Password</label>
                      <div className="input-2">
                        <div className="content-2">
                          <input
                            id="password"
                            className="text"
                            name="password"
                            placeholder="Your password"
                            type="password"
                            {...register("password")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <TypePrimaryStateWrapper
                    className="button-instance"
                    iconOnly={false}
                    leftIcon={false}
                    rightIcon={false}
                    size="large"
                    state="default"
                    text="Sign up"
                    type="primary"
                  />

                  <p className="subtitle">
                    Already have an account? <Link to="/login">Sign in</Link>
                  </p>
                </form>
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
