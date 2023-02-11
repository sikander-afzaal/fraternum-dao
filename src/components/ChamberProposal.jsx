import { Link } from "react-router-dom";

const ChamberProposal = () => {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 border-dashed bg-[#150D0DCC] border border-[#00FF47]  rounded-[10px] px-5 py-4">
      <div className="flex justify-start items-start flex-col gap-3 w-full">
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
        <div className="flex xl:flex-row flex-col w-full justify-start items-center gap-5">
          <button className="border text-mint border-white border-solid rounded-[10px] w-full xl:w-[120px] h-[32px] text-min text-xl font-normal uppercase">
            No
          </button>
          <button className="border border-white border-solid rounded-[10px] w-full xl:w-[120px] h-[32px] text-min text-xl font-normal uppercase text-mint">
            Yes (21)
          </button>
        </div>
        <p className="text-white font-abel text-sm">
          REQUESTING: NFT TREASURY PURCHASE (4,350 FTM)
        </p>
      </div>
      <div className="flex justify-start gap-[2px] items-end flex-col w-full">
        <p className="flex font-abel text-base text-white justify-between w-full  items-center">
          <span>STAKING APR:</span>
          <span>11%</span>
        </p>
        <p className="text-white font-abel text-sm flex justify-between items-center w-full gap-2">
          <span>Start Date:</span>
          <span>April 1, 2022 10:29 AM UTC</span>
        </p>
        <p className="text-white font-abel text-sm flex justify-between items-center w-full gap-2">
          <span>End Date:</span>
          <span>April 31, 2022 10:29 AM UTC</span>
        </p>
        <button className="font-normal text-xl uppercase text-white my-2 bg-[#9FFFBA7A] w-full xl:w-[160px] h-[40px] rounded-[10px] border border-solid  border-[#9FFFBA87]">
          Processed
        </button>
        <Link
          to="/chambers/details"
          className="font-bold flex justify-center items-center text-[28px] text-white bg-[#7CBB82] w-full xl:w-[120px] h-[40px] rounded-[10px] border-none"
        >
          OPEN
        </Link>
      </div>
    </div>
  );
};

export default ChamberProposal;
