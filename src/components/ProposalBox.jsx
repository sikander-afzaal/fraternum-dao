const ProposalBox = () => {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 border-dashed border border-[#312F62]  rounded-[10px] px-5 py-2">
      <div className="flex justify-start items-start flex-col gap-3 w-full">
        <p className="flex font-abel text-base text-white justify-between min-w-full xl:min-w-[170px] items-center">
          <span>STAKING APR:</span>
          <span>11%</span>
        </p>
        <h3 className="font-pirate  leading-[1] text-[38px] font-normal text-white opacity-90">
          PROP001
        </h3>
        <p className="font-abel leading-[1] text-mint text-lg">
          PURCHASE 4x UMAN NFTs
        </p>
        <div className="w-full flex justify-start items-start flex-col gap-2">
          <div className="w-full overflow-hidden rounded-full bg-progressBg relative h-[15px] shadow-progressShadow">
            <div className="absolute w-[70%] rounded-full z-10 h-full bg-progressFill left-0 top-0"></div>
          </div>
          <p className="text-white font-abel ">CONSENSUS: 75%</p>
        </div>
      </div>
      <div className="flex justify-start gap-2 items-end flex-col w-full">
        <p className="text-white font-abel text-sm flex justify-between items-center w-full gap-2">
          <span>Start Date:</span>
          <span>April 1, 2022 10:29 AM UTC</span>
        </p>
        <p className="text-white font-abel text-sm flex justify-between items-center w-full gap-2">
          <span>End Date:</span>
          <span>April 31, 2022 10:29 AM UTC</span>
        </p>
        <button className="font-bold text-[28px] mt-3 xl:mt-10 text-white bg-openBtnBg w-[120px] h-[40px] rounded-[10px] border-none">
          OPEN
        </button>
      </div>
    </div>
  );
};

export default ProposalBox;
