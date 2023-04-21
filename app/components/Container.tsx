"use client";
import React, { useState } from "react";
import LoginSignup from "./LoginSignup";

type Props = {};

const Container = (props: Props) => {
  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);

  return (
    <div>
      {isLogin ? (
        <LoginSignup
          heading="Join thousands of learners from around the world"
          subHeading="Master web development by making real-life projects. There are multiple paths for you to choose"
          buttonText="Start coding now"
          linkText="Already a member?"
          link="Login"
          isLogin={isLogin}
          setLogin={setLogin}
        />
      ) : (
        <LoginSignup
          heading="Login"
          buttonText="Login"
          setLogin={setLogin}
          linkText="Don't have an account?"
          link="Register"
          isLogin={isLogin}
        />
      )}
    </div>
  );
};

export default Container;
