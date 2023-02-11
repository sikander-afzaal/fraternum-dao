const CryptBox = () => {
  return (
    <div className="flex relative justify-start items-center flex-col bg-[#00000094] pb-4 pt-2 px-5 rounded-[10px]">
      <div className="absolute bg-borderGreen -inset-1 -z-10 rounded-[10px]"></div>
      <div className="-translate-y-1/2 flex justify-center items-center">
        <img
          src="/crypt.png"
          className="-mr-5 object-contain w-[150px] drop-shadow-crypt"
          alt=""
        />
      </div>
      <h2 className="text-white font-pirate -mt-10 font-normal text-[40px]">
        FHFC AVATARS
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-2">
        <p className="col-span-2 text-center text-mint text-lg font-abel">
          POOL SIZE: 10,000 xFRAT
        </p>
        <div className="flex justify-start items-start flex-col gap-2">
          <p className="font-abel text-mint text-lg uppercase">Deposited:</p>
          <p className="font-abel text-mint text-lg">Rewards:</p>
          <button className="text-white rounded-[10px] text-lg font-normal bg-darkGreen border-none w-[100px] h-[32px]">
            STAKE
          </button>
        </div>
        <div className="flex justify-start items-end flex-col gap-2">
          <p className="font-abel text-mint text-lg uppercase">$420.00</p>
          <p className="font-abel text-mint text-lg">$69.00</p>
          <button className="text-white rounded-[10px] text-lg font-normal bg-darkGreen border-none w-[100px] h-[32px]">
            CLAIM
          </button>
        </div>
      </div>
      <button className="text-white mt-4 rounded-[10px] text-lg font-normal bg-darkGreen border-none w-[100px] h-[32px]">
        WITHRAW
      </button>
    </div>
  );
};

export default CryptBox;
