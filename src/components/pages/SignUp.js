import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignUp = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleCreateWallet = async () => {
    try {
      await axios
        .post("http://localhost:7777/v1/create-wallet", {
          Fname,
          Lname,
          Email,
          Password,
        })
        .then((res) => {
          toast.success("Virtual wallet created successfully!");
          window.location = "/signin";
          console.log(res.data.msg);
        });
    } catch (error) {
      console.error(error);
      toast.error("Already registered!");
    }
  };
  return (
    <div className="bg-cover w-full h-full pt-20 pb-20 bg-[url('./background.jpg')]">
      <form className="w-full max-w-lg p-10 m-auto bg-white border bg-whites">
        <ToastContainer />
        <div className="pb-5 text-4xl text-center text-teal-500">SignUp</div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              First Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
              type="text"
              placeholder="Jane"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              E-mail
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="example@gmail.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          className="flex-shrink-0 w-full px-2 py-3 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
          type="button"
          onClick={handleCreateWallet}
        >
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
