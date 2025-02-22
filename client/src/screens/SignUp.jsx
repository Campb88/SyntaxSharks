// signup.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { TypePrimaryStateWrapper } from "../components/TypePrimaryStateWrapper";
import "./signup.css";

// Schema for username, email, and password
const signupSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema),
  });
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5713/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Signup failed");
      }
      const result = await response.json();
      toast.success(result.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

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
                      <div className="label-2">Username</div>
                      <div className="input-2">
                        <div className="content-2">
                          <input
                            className="text"
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
                      <div className="label-2">Email</div>
                      <div className="input-2">
                        <div className="content-2">
                          <input
                            className="text"
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
