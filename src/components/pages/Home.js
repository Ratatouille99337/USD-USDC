import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [usdamount, setusdamount] = useState(0);
  const [usdcamount, setusdcamount] = useState(0);
  const flag = localStorage.getItem("cardlink");
  console.log(flag);
  //const [usdcbal, setusdcbal] = useState(0);
  const [totalbal, settotalbal] = useState(0);

  let usdcbal;

  let publickey = localStorage.getItem("address");

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .post("http://localhost:7777/v1/getUSDC", {
            publickey,
          })
          .then((res) => {
            //  console.log(res.data.msg);
            // setusdcbal(res.data.msg);
            settotalbal(res.data.msg);
          });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  // try {
  //   axios
  //     .post("http://localhost:7777/v1/getUSDC", {
  //       publickey,
  //     })
  //     .then((res) => {
  //       console.log(res.data.msg);
  //       setusdcbal(res.data.msg);
  //     });
  // } catch (error) {
  //   console.error(error);
  // }
  // });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleUsdamount = (e) => {
    setusdamount(e.target.value);
    setusdcamount(e.target.value * 0.999837);
  };
  const usdcSave = async () => {
    settotalbal(parseFloat(usdcamount) + parseFloat(totalbal));
    usdcbal = parseFloat(usdcamount) + parseFloat(totalbal);
    console.log(parseFloat(totalbal));
    console.log(parseFloat(usdcamount));
    console.log(usdcbal);
    try {
      await axios
        .post("http://localhost:7777/v1/saveUSDC", {
          usdcbal,
          publickey,
        })
        .then((res) => {
          toast.success("Successfully exchanged!");
          console.log(res.data.msg);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-cover w-full h-full bg-[url('./background.jpg')]">
      <div>
        <div class="min-h-screen flex pb-20 pt-20 ">
          <div class="w-full">
            <ToastContainer />
            <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-2/4">
              <div class="flex flex-col">
                <div class="flex flex-row gap-4 ">
                  <h4 class="text-blue-400 font-bold text-xl uppercase  mt-10">
                    Wallet Address:
                  </h4>
                  <h3 class="text-blue-400 font-bold text-xl  mt-10">
                    {publickey}
                  </h3>
                </div>
                <div class="flex flex-row gap-4 ">
                  <h3 class="text-blue-400 font-bold text-xl uppercase  mt-3">
                    USDC:
                  </h3>
                  <h3 class="text-blue-400 font-bold text-xl uppercase  mt-3">
                    {totalbal}
                  </h3>
                </div>
                <div class="flex flex-row gap-8 mt-5">
                  <a
                    class="block object-fill bg-green-500 text-white font-bold p-4 rounded-lg mt-5"
                    href="/cardlink"
                  >
                    Link a card
                  </a>
                  <a
                    class="block bg-green-500 text-white font-bold p-4 rounded-lg mt-5 object-fill"
                    href="/bank"
                  >
                    Withdraw Funds
                  </a>
                </div>
              </div>
              <hr class="mt-10" />
              <div>
                <h2 class="text-center text-blue-400 font-bold text-2xl uppercase  mt-10">
                  Buy USDC
                </h2>
                <div class="mb-5">
                  <label for="name" class="block mb-2 font-bold text-gray-600">
                    USD
                  </label>
                  <input
                    type="number"
                    id="buyusd"
                    name="buyusd"
                    value={usdamount}
                    onChange={handleUsdamount}
                    placeholder="Enter the amount"
                    class="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                  {/* <p class="text-sm text-red-400 mt-2">
                        Amount is required
                      </p> */}
                </div>

                <div class="mb-10">
                  <label
                    for="twitter"
                    class="block mb-2 font-bold text-gray-600"
                  >
                    USDC
                  </label>
                  <input
                    type="text"
                    id="buyusdc"
                    name="buyusdc"
                    value={usdcamount}
                    placeholder=""
                    class="border border-grey-300 shadow p-3 w-full rounded mb-"
                  />
                </div>

                {flag ? (
                  <button
                    class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg text-center"
                    onClick={usdcSave}
                  >
                    Buy
                  </button>
                ) : (
                  <a
                    href="cardlink"
                    class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg text-center"
                  >
                    Buy
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
