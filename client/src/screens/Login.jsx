import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { TypePrimaryStateWrapper } from "../components/TypePrimaryStateWrapper";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import "./signup.css";

const loginSchema = z.object({
  identifier: z.string().min(1, { message: "Email or Username is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://syntaxsharks-backend.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }
      const result = await response.json();
      // Save token and user to localStorage
      localStorage.setItem("authToken", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      
      // Dispatch both user and token to Redux
      dispatch(login({ user: result.user, token: result.token }));
      toast.success(result.message);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "An error occurred during login");
    }
  };

  useEffect(() => {
    Object.keys(errors).forEach((key, index) => {
      setTimeout(() => {
        toast.error(errors[key].message);
      }, (index + 1) * 1000);
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
                <div className="heading">Welcome Back</div>
                <p className="you-can-reach-us">
                  <span className="text-wrapper">
                    Log in to access your account and continue your journey.
                  </span>
                </p>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-field">
                    <div className="div-2">
                      <div className="label-2">Email or Username</div>
                      <div className="input-2">
                        <div className="content-2">
                          <input
                            className="text"
                            placeholder="Enter your email or username"
                            type="text"
                            {...register("identifier")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="input-field">
                    <div className="div-2">
                      <div className="label-2">Password</div>
                      <div className="input-2">
                        <div className="content-2">
                          <input
                            className="text"
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
                    text="Login"
                    type="primary"
                  />
                  
                  <p className="subtitle">
                    Don't have an account? <Link to="/signup">Create an Account</Link>
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

export default Login;
