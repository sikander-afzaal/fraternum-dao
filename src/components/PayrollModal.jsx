import { useState } from "react";
import InputBox from "./InputBox";

const PayrollModal = () => {
  const [formData, setFormData] = useState({
    title: "",
    minion: "",
    payment: "",
    recipient: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="overlay z-[91]"></div>
      <div className="fixed greenScroll top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 max-h-[90%] overflow-y-auto flex justify-start items-start flex-col w-[90%] max-w-[600px] gap-5 bg-gray p-5 z-[92] rounded-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 absolute top-3 right-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-2 w-full">
          <h3 className="font-pirate uppercase text-white text-[22px] leading-[1] ">
            Payroll Proposal
          </h3>
          <p className="text-mint font-alumni text-[30px] leading-[1]">
            Payroll Proposal
          </p>
          <p className="text-abel text-base sm:text-xl text-white">
            Pay members with a minion
          </p>
        </div>
        <form className="flex justify-start items-start flex-col gap-5 w-full">
          <InputBox
            handler={inputHandler}
            value={formData.title}
            placeholder="Proposal Title"
            label="Title"
            name="title"
          />
          <div className="flex justify-start w-full items-start flex-col gap-3 relative">
            <label
              htmlFor="select-min"
              className="text-white uppercase text-2xl font-alumni leading-[1]"
            >
              * Select a minion
            </label>
            <select
              id="select-min"
              name={"minion"}
              value={formData.minion}
              className="w-full rounded-[10px] outline-none bg-transparent h-[45px] border border-white border-solid text-white pl-3 text-lg"
              onChange={inputHandler}
            >
              <option value="Choose">Choose a DAO minion</option>
              <option value="Choose">Choose a DAO minion</option>
              <option value="Choose">Choose a DAO minion</option>
              <option value="Choose">Choose a DAO minion</option>
            </select>
          </div>
          <InputBox
            handler={inputHandler}
            value={formData.payment}
            placeholder="0"
            label="Minion Payment"
            name="payment"
          />
          <InputBox
            purplebox="Members"
            handler={inputHandler}
            value={formData.recipient}
            placeholder="0x"
            label="recipient"
            name="recipient"
          />

          <div className="flex sm:flex-row flex-col justify-between items-center gap-3 w-full">
            <button className="border-lightGreen text-lightGreen border border-solid bg-transparent hover:bg-lightGreen w-full sm:w-auto hover:text-white transition-all duration-300 text-xl h-[45px] px-5 rounded-[10px]">
              More +
            </button>
            <div className="flex w-full sm:w-auto justify-center items-center sm:flex-row flex-col gap-3">
              <button className="border-lightGreen text-lightGreen border border-solid bg-transparent hover:bg-lightGreen w-full sm:w-auto hover:text-white transition-all duration-300 text-xl h-[45px] px-5 rounded-[10px]">
                Cancel
              </button>
              <button className="border-lightGreen text-white border border-solid bg-lightGreen hover:bg-transparent w-full sm:w-auto hover:text-lightGreen transition-all duration-300 text-xl h-[45px] px-5 rounded-[10px]">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PayrollModal;
