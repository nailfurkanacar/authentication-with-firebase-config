import { useState } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleSetHasAccount = () => {
    setHasAccount(!hasAccount);
  };
  return (
    <div className="px-10">
      <h1 className="text-3xl flex justify-center font-bold underline text-purple-500">
        Auth Page
      </h1>
      {hasAccount ? (
        <div className="py-20 ">
          <Login />
        </div>
      ) : (
        <div className="py-20">
          <Signup />
        </div>
      )}

      {hasAccount ? (
        <div className="flex flex-row">
          <p>Are you new? Please join...</p>
          <button onClick={handleSetHasAccount}>Register</button>
        </div>
      ) : (
        <div className="flex  flex-row">
          <p>Have you already have account? Please login...</p>
          <button onClick={handleSetHasAccount}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
