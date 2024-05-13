import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cardlink = () => {
  const [cardnumber1, setcardnumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleCardnumberChange = (e) => {
    setcardnumber(e.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCard = () => {
    console.log(selectedOption);
    console.log(cardnumber1.length);
    if (cardnumber1.length != selectedOption || cardnumber1.length == 0) {
      toast.error("Credit card number is not correct.");
    } else {
      toast.success("Your card is successfuly linked");
      localStorage.setItem("cardlink", true);
      window.location = "/home";
    }
  };

  return (
    <div className="bg-cover w-full h-full bg-[url('./background.jpg')]">
      <div>
        <div className="flex min-h-screen pt-20 pb-20">
          <div className="w-full">
            <ToastContainer />
            <div className="p-10 mx-auto bg-white rounded-lg shadow md:w-3/4 lg:w-1/3">
              <h2 className="mt-10 text-2xl font-bold text-center text-blue-400 uppercase">
                Link a Card
              </h2>

              <div className="mt-10">
                <input
                  type="text"
                  id="cardnumber"
                  name="cardnumber"
                  value={cardnumber1}
                  onChange={handleCardnumberChange}
                  placeholder="Debit or credit card number"
                  className="w-full p-3 border border-gray-300 rounded shadow mb-"
                />
                {/* <p className="mt-2 text-sm text-red-400">
                        Amount is required
                      </p> */}
              </div>

              <div className="mt-5 mb-5">
                <select
                  id="twitter"
                  name="twitter"
                  className="w-full p-3 border rounded shadow border-grey-300 mb-"
                  onChange={handleSelectChange}
                >
                  <option>Select your card type</option>
                  <option value="13">Visa</option>
                  <option value="14">Mastercard</option>
                  <option value="15">American Express</option>
                  <option value="16">Discover</option>
                </select>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="Expiration date"
                  className="w-full p-3 border rounded shadow border-grey-300 mb-"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="Security code"
                  className="w-full p-3 border rounded shadow border-grey-300 mb-"
                />
              </div>
              <div className="mb-10">
                <select
                  id="twitter"
                  name="twitter"
                  className="w-full p-3 border rounded shadow border-grey-300 mb-"
                >
                  <option>Uzice Gostinica BB 31204, Uzice Gostinica!</option>
                  <option>23</option>
                  <option>34</option>
                </select>
              </div>
              <button
                className="block w-full p-4 font-bold text-white bg-blue-500 rounded-lg"
                onClick={handleCard}
              >
                Link Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardlink;
