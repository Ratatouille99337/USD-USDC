import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const SignIn = () => {
  const [Lg_Email, setLg_Email] = useState("");
  const [Lg_Password, setLg_Password] = useState("");
  const [key, setkey] = useState([]);
  const [walletAddr, setwalletAddr] = useState("");
  const handleSignIn = async () => {
    try {
      await axios
        .post("http://localhost:7777/v1/SignIn", {
          Lg_Email,
          Lg_Password,
        })
        .then((res) => {
          setwalletAddr(res.data.msg);
          // alert(walletAddr);
          // console.log(res.data);
          localStorage.setItem("address", res.data.msg);
          if (res.data.msg.length > 14) {
            toast.success("You have successfully logged in!");
            window.location = "/home";
          } else {
            toast.error("You are an unregistered user!");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-cover w-full h-full pt-20 pb-20 bg-[url('./background.jpg')]">
      <form className="w-full max-w-lg p-10 m-auto bg-white border">
        <ToastContainer />
        <div className="pb-5 text-4xl text-center text-teal-500">SignIn</div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              E-mail
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="example@gmail.com"
              value={Lg_Email}
              onChange={(e) => setLg_Email(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Password
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder="******************"
              value={Lg_Password}
              onChange={(e) => setLg_Password(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          className="flex-shrink-0 w-full py-3 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded px-9 hover:bg-teal-700 hover:border-teal-700"
          type="button"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
