import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (values) => {
    await delay(0.3);
    console.log(values);

    // if (values.username !== "hamza") {
    //   setError("myform", {
    //     type: "manual",
    //     message: "Username is incorrect",
    //   });
    // }
    // if (values.username === "hamza1") {
    //   setError("blocked", {
    //     type: "manual",
    //     message: "Sorry! this user is Blocked",
    //   });
    // }
  };

  return (
    <>
      {isSubmitting && <div>loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "Username is required." },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
            id=""
          />
          {errors.username && (
            <div className="red">{errors.username.message}.</div>
          )}
          <input
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "password is required." },
              minLength: { value: 5, message: "Min length of password is 5" },
            })}
            type="password"
            id=""
          />
          {errors.password && (
            <div className="red">{errors.password.message}.</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className="red">{errors.myform.message}.</div>}
          {errors.blocked && (
            <div className="red">{errors.blocked.message}.</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
