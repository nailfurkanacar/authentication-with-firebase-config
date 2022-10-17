import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../../plugins/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit", // can be onBlur as depend
  });
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (data) => {
    console.log(data);
    await login({
      email: data?.email,
      password: data?.password,
    })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
        navigate("/authenticated");
      })

      .catch((err) => console.log("err", err));
  };

  return (
    <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
      <div className="mb-8">
        <label
          htmlFor="email"
          className={`block font-bold text-sm mb-2 ${
            errors?.email ? "text-red-400" : "text-purple-400"
          }`}
        >
          Email
        </label>
        <input
          autoComplete="off"
          type="text"
          name="email"
          id="email"
          placeholder="sample@sample.com"
          className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${
            errors?.email
              ? "text-red-300 border-red-400"
              : "text-purple-200 border-purple-400"
          }`}
          {...register("email", {
            required: "Your Email is required.",
          })}
        />
        {errors?.email && (
          <p className="text-red-500 text-sm mt-2">{errors?.email?.message}</p>
        )}
      </div>

      <div className="mb-8">
        <label
          htmlFor="password"
          className={`block font-bold text-sm mb-2 ${
            errors?.password ? "text-red-400" : "text-purple-400"
          }`}
        >
          Password
        </label>
        <input
          autoComplete="off"
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-purple-200 focus:bg-purple-600 placeholder-purple-500 ${
            errors?.password ? "border-red-400" : "border-purple-400"
          }`}
          {...register("password", {
            required: "Your password is required.",
          })}
        />
        {errors?.password && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.password?.message}
          </p>
        )}
      </div>

      <button className="inline-block bg-purple-600 text-purple-200 rounded shadow py-2 px-5 text-sm">
        Login
      </button>
    </form>
  );
};

export default Login;
