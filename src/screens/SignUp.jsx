import React from "react";
import { TypePrimaryStateWrapper } from "../components/TypePrimaryStateWrapper"
import { Button } from "../icons/Button/Button";
import { Button1 } from "../icons/Button1/Button1";
import { Logos1 } from "../icons/Logos1/Logos1";
import "./signup.css";
import {useEffect, useState} from "react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {supabase} from '../../supabaseClient'
import { Navigate } from "react-router";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router";

  

export const SignUp = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  // Remove any trailing hash from the URL as soon as the component mounts
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const redirectToDashboard = () => {
      navigate("/dashboard", { replace: true });
      window.history.replaceState(null, "", "/dashboard");
    };

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      if (session) {
        redirectToDashboard();
      }
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) {
          redirectToDashboard();
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="signup">
      <div className="contact-page-header">
        {/* Background Image */}
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

              {/* Authentication UI */}
              <div className="form">
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  theme="dark"
                  providers={["google"]}
                  // Pass a full URL for OAuth redirect (must be whitelisted in Supabase)
                  redirectTo={`${window.location.origin}/dashboard`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


  /*

  // Auth framework
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </div>
  );
  };
   */
  


  /*
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
                <div className="div">
                  <div className="input-field">
                    <div className="div-2">
                      <div className="label-2">Name</div>

                      <div className="input-2">
                        <div className="content-2">
                          <input
                            className="text"
                            id="input-name"
                            placeholder="Your name"
                            type="text"
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
                            id="input-email"
                            placeholder="you@company.com"
                            type="email"
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
                            id="input-pass"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <div className="div-2">
                      <div className="label-2">Phone number</div>
                        <div className="input-2">

                          <div className="content-2">
                            <input
                              className="text"
                              id="phonenumber"
                              placeholder="+1 (555) 000-0000"
                            />
                        </div>
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
                  text="Get Started"
                  type="primary"
                />
              </div>

              <div className="you-can-reach-us-2">Or Create Account with</div>

              <div className="container-2">
                <Button className="icon-instance-node" />
                <Button1 className="button-1" />
                <div className="logos-wrapper">
                  <Logos1 className="logos" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
*/



// Broken

  /*
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const navigate = useNavigate();


  supabase.auth.onAuthStateChange(async (event)=>{
    if (event !== "SIGNED_IN"){
      // forward to success URL
      navigate("/dashboard")
    } else {
      // forward to localhost:5173
      navigate("/")
    }
  })

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{theme: ThemeSupa}}
        theme = "dark"
        providers={["google"]}
      />


    </div>
  );

*/
  

  /*

  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signOut = async () =>{
    const {error} = await supabase.auth.signOut();
  }

  const signUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    })
  }



  if (!session) {
    return (<>
      <button onClick={signUp}> Sign In </button>
    </>
    )
    
    
    // (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>
      
      <h2> Hello</h2>
      <button onClick ={signOut}> sign out</button>



    </div>)

    // Navigate("/dashboard");
  }


*/