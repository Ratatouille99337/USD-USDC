import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Bank = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [amount, setamount] = useState(0);
  const [total, settotal] = useState();
  let usdcbal;
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleBank = (e) => {
    setamount(e.target.value);
  };
  let publickey = localStorage.getItem("address");

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .post("http://localhost:7777/v1/getUSDC", {
            publickey,
          })
          .then((res) => {
            settotal(res.data.msg);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const bankwithdraw = async () => {
    usdcbal = parseFloat(total) - parseFloat(amount);
    try {
      await axios
        .post("http://localhost:7777/v1/saveUSDC", {
          usdcbal,
          publickey,
        })
        .then((res) => {
          toast.success("Successfully Deposet!");
          window.location = "/home";
          console.log(res.data.msg);
        });
    } catch (error) {
      console.error(error);
      toast.success("bank error!");
    }
  };

  return (
    <div className="bg-cover w-full h-full bg-[url('./background.jpg')]">
      <ToastContainer />
      <div>
        <div class="min-h-screen flex pb-20 pt-20 ">
          <div class="w-full">
            <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/3">
              <form action="">
                <h3 class="text-blue-400 font-bold text-2xl uppercase  mt-10">
                  Provide your bank information
                </h3>
                <h5 class="text-grey-40 font-bold  uppercase  mt-5">
                  This is the account where the transfer will be sent.
                </h5>
                <div class="mt-5">
                  <label
                    for="bankname"
                    class="block mb-2 font-bold text-green-600"
                  >
                    Bank Name:
                  </label>
                  <input
                    type="text"
                    id="bankname"
                    name="bankname"
                    placeholder="Bank Name"
                    class="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                  {/* <p class="text-sm text-red-400 mt-2">
                        Amount is required
                      </p> */}
                </div>

                <div class="mb-5 mt-5">
                  <label
                    for="rounumber"
                    class="block mb-2 font-bold text-green-600"
                  >
                    Routing Number:
                  </label>
                  <input
                    type="text"
                    id="rounumber"
                    name="rounumber"
                    placeholder="Routing Number"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div class="mb-5">
                  <label for="city" class="block mb-2 font-bold text-green-600">
                    Back City/State:
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Back City/State"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="accnumber"
                    class="block mb-2 font-bold text-green-600"
                  >
                    Account Number:
                  </label>
                  <input
                    type="text"
                    id="accnumber"
                    name="accnumber"
                    placeholder="Account Number"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div class="mb-10">
                  <label
                    for="acctype"
                    class="block mb-2 font-bold text-green-600"
                  >
                    Account Type:
                  </label>
                  <select
                    id="acctype"
                    name="acctype"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  >
                    <option>CHECKING</option>
                    <option>23</option>
                    <option>34</option>
                  </select>
                </div>

                <h3 class="text-blue-400 font-bold text-2xl uppercase  mt-10">
                  Provide your bank details
                </h3>
                <h4 class="text-grey-40 font-bold  uppercase  mt-5">
                  Enter the account details exactly as it appears on your bank
                  account.
                </h4>
                <div class="mt-5">
                  <label
                    for="accname"
                    class="block mb-2 font-bold text-green-600"
                  >
                    Account Name:
                  </label>
                  <input
                    type="text"
                    id="accname"
                    name="accname"
                    placeholder="Account Name"
                    class="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>

                <div class="mb-5 mt-5">
                  <label for="add1" class="block mb-2 font-bold text-green-600">
                    Address line 1:
                  </label>
                  <input
                    type="text"
                    id="add1"
                    name="add1"
                    placeholder="Address line 1"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div class="mb-5">
                  <label for="add2" class="block mb-2 font-bold text-green-600">
                    Address line 2:
                  </label>
                  <input
                    type="text"
                    id="add2"
                    name="add2"
                    placeholder="Address line 2"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div class="mb-10">
                  <label
                    for="country"
                    class="block mb-2 font-bold text-green-600"
                  >
                    Country:
                  </label>
                  <select
                    id="country"
                    name="country"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  >
                    <option>US</option>
                    <option>UK</option>
                    <option>Canada</option>
                  </select>
                </div>
                <div class="pb-10">
                  <label
                    for="withdraw"
                    class="block mb-2 font-bold text-red-600"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="withdraw"
                    value={amount}
                    onChange={handleBank}
                    name="withdraw"
                    placeholder="Amount"
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <button
                  onClick={bankwithdraw}
                  class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
                >
                  Withdraw Funds
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
