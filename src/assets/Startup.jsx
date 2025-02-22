import React, { useState } from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";

function Startup() {
  const [isLogin, setIsLogin] = useState(true); // Initially, show Login screen

  return (
    <>
      {isLogin ? (
        <Part1 switchToSignup={() => setIsLogin(false)} />
      ) : (
        <Part2 switchToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default Startup;
