import { useState } from "react";
import InputBox from "./InputBox";

const NftTributeModal = () => {
  const [formData, setFormData] = useState({
    minion: "",
    auto: false,
    manual: false,
    file: false,
    title: "",
    desc: "",
    shares: "",
    loot: "",
    payment: "",
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
      <div className="fixed greenScroll top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 max-h-[90%] overflow-y-auto flex justify-start items-start flex-col w-[90%] max-w-[800px] gap-5 bg-gray p-5 z-[92] rounded-[10px]">
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

        <div className="flex w-full justify-start items-center text-center sm:text-left sm:items-start flex-col gap-2">
          <h3 className="font-pirate uppercase text-white text-[22px] leading-[1] ">
            Offer nft as tribute
          </h3>
          <p className="text-mint font-alumni text-[30px] leading-[1]">
            Nft Tribute
          </p>
          <p className="text-abel text-base sm:text-xl text-white">
            Offer an nft as a tribute to the DAO. Optionally, offer or request
            some funds as well.
          </p>
        </div>
        <form className="flex justify-start items-start flex-col  gap-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-5 md:gap-x-8">
            <div className="flex justify-start items-start flex-col w-full gap-5">
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
                <div className="flex justify-start mt-3 w-full items-start flex-col gap-3">
                  <p className="text-white text-base sm:text-xl uppercase leading-[1.3]">
                    Select an nft (must be in your wallet)
                  </p>
                  <div className="flex justify-start items-center gap-5 ">
                    <div className="flex justify-start items-center gap-3 ">
                      <input
                        onChange={(e) =>
                          setFormData((prev) => {
                            return { ...prev, auto: e.target.value };
                          })
                        }
                        type="radio"
                        name="type"
                        className="accent-lightGreen"
                        value={formData.auto}
                        id="auto"
                      />
                      <label
                        htmlFor="auto"
                        className="text-white uppercase text-2xl font-alumni leading-[1]"
                      >
                        Auto
                      </label>
                    </div>
                    <div className="flex justify-start items-center gap-3 ">
                      <input
                        value={formData.manual}
                        onChange={(e) =>
                          setFormData((prev) => {
                            return { ...prev, manual: e.target.value };
                          })
                        }
                        type="radio"
                        name="type"
                        className="accent-lightGreen"
                        id="manual"
                      />
                      <label
                        htmlFor="manual"
                        className="text-white uppercase text-2xl font-alumni leading-[1]"
                      >
                        Manual
                      </label>
                    </div>
                  </div>
                  <div className=" w-full aspect-square max-h-[340px] border border-dashed border-white rounded-[10px] cursor-pointer">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="appearance-none hidden"
                      onChange={(e) =>
                        setFormData((prev) => {
                          return { ...prev, file: e.target.files[0] };
                        })
                      }
                    />
                    <label
                      htmlFor="file"
                      className="w-full cursor-pointer h-full flex justify-center items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#53EA62"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </label>
                  </div>
                  <button
                    type="button"
                    className={`border-lightGreen text-lightGreen border border-solid bg-transparent hover:bg-lightGreen w-full sm:w-auto hover:text-white transition-all duration-300 text-base h-[40px] px-5 rounded-[10px] ${
                      formData.file
                        ? "pointer-events-auto opacity-100"
                        : "opacity-50 pointer-events-none"
                    }`}
                  >
                    Approve NFT Transfer
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col w-full gap-5">
              <InputBox
                handler={inputHandler}
                value={formData.title}
                placeholder="Proposal Title"
                label="Title"
                name="title"
              />
              <div className="flex justify-start w-full items-start flex-col gap-3">
                <label
                  htmlFor={"desc"}
                  className="text-white uppercase text-2xl font-alumni leading-[1]"
                >
                  Description
                </label>
                <textarea
                  id={"desc"}
                  name={"desc"}
                  value={formData.desc}
                  placeholder={"Your Description Here"}
                  className="w-full rounded-[10px] outline-none bg-transparent h-[105px] border border-white border-solid text-white pt-3 pl-3 text-lg resize-none"
                  onChange={inputHandler}
                ></textarea>
              </div>
              <InputBox
                handler={inputHandler}
                value={formData.shares}
                placeholder="0"
                label="Shares Requested"
                name="shares"
              />
              <InputBox
                handler={inputHandler}
                value={formData.loot}
                placeholder="0"
                label="Loot Requested"
                name="loot"
              />
              <div className="flex relative w-full justify-start items-start flex-col gap-3">
                <p className="absolute top-0 right-0 bg-black text-lightGreen text-sm border-lightGreen border border-solid rounded-[10px] px-3 py-1 flex justify-center items-center">
                  Max:25000
                </p>
                <label
                  htmlFor={"payment"}
                  className="text-white uppercase text-2xl font-alumni leading-[1]"
                >
                  * Payment Requested
                </label>
                <div className="flex justify-start items-center rounded-[10px] overflow-hidden w-full border border-white border-solid h-[45px]">
                  <input
                    type="text"
                    placeholder="0"
                    value={formData.payment}
                    name={"payment"}
                    id="payment"
                    onChange={inputHandler}
                    className="w-full bg-transparent border-none outline-none h-full text-white pl-3 "
                  />
                  <select className="min-w-[100px] outline-none border-l border-l-white border-solid px-3 bg-darkGreen text-white h-full">
                    <option value="karma">KARMA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col justify-between items-center gap-3 w-full">
            <div className="flex w-full  justify-end  items-center sm:flex-row flex-col gap-3">
              <button
                type="button"
                className="border-lightGreen text-lightGreen border border-solid bg-transparent hover:bg-lightGreen w-full sm:w-auto hover:text-white transition-all duration-300 text-xl h-[45px] px-5 rounded-[10px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border-lightGreen text-white border border-solid bg-lightGreen hover:bg-transparent w-full sm:w-auto hover:text-lightGreen transition-all duration-300 text-xl h-[45px] px-5 rounded-[10px]"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NftTributeModal;
