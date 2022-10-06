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
      <h1 className="text-3xl flex justify-center font-bold  text-purple-500 mt-4">
        {hasAccount ? "Login" : "Be register with your mail and password"}
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

      <div className="flex flex-col items-center">
        <p>
          {hasAccount
            ? "Are you new? Please join..."
            : "Have you already have account? Please login..."}
        </p>
        <div className="m-4 inline-block bg-purple-600 text-purple-200 rounded shadow py-2 px-5 text-sm">
          <button onClick={handleSetHasAccount}>
            {hasAccount ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
