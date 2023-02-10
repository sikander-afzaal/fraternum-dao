const SanctumBox = () => {
  return (
    <div className="flex relative justify-start items-center flex-col bg-[#00000094] py-2 px-5 rounded-[10px]">
      <div className="absolute bg-borderGreen -inset-1 -z-10 rounded-[10px]"></div>
      <div className="-translate-y-1/2 flex justify-center items-center">
        <img src="/nft.png" className="-mr-5 object-contain w-[120px]" alt="" />
        <img src="/nft.png" className="-ml-5 object-contain w-[120px]" alt="" />
      </div>
      <h2 className="text-white font-pirate -mt-10 font-normal text-[40px]">
        FRAT-FTM LP
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-2">
        <div className="flex justify-start items-start flex-col gap-2">
          <p className="font-abel text-mint text-lg">APR: --/--%</p>
          <p className="font-abel text-mint text-lg uppercase">Deposited:</p>
          <p className="font-abel text-mint text-lg">Rewards:</p>
          <button className="text-white rounded-[10px] text-lg font-normal bg-darkGreen border-none w-[100px] h-[32px]">
            STAKE
          </button>
        </div>
        <div className="flex justify-start items-start flex-col gap-2">
          <p className="font-abel text-mint text-lg">DAILY APR: --/--%</p>
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
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-1">
          <img src="/cat.png" className="object-contain w-[27px]" alt="" />
          <p className="text-[#FF7A7A] text-sm font-abel">GET LP TOKENS</p>
        </div>
        <p className="text-[#FF7A7A] text-sm font-abel">2.5% WITHRAW FEE</p>
      </div>
    </div>
  );
};

export default SanctumBox;
