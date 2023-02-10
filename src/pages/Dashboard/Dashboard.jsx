import ProposalBox from "../../components/ProposalBox";

const Dashboard = () => {
  return (
    <div className="flex max-w-[1224px] justify-start items-center flex-col w-full px-5 ">
      <div className="flex  mt-7 xl:flex-row flex-col justify-between items-center sm:items-start gap-5 xl:gap-0 xl:items-center xl:w-full sm:w-auto w-full border border-dashed border-[#312F62] rounded-[10px] p-5">
        <div className="flex justify-start items-center sm:items-start flex-col ">
          <p className="text-[26px] font-alumni leading-[1] text-white">
            PROPOSAL VESTING PERIOD
          </p>
          <p className="text-[46px] opacity-90 leading-[1] font-alumni text-white">
            30 DAYS
          </p>
          <p className="text-[30px] font-alumni leading-[1] text-mint">
            DAILY INTEREST UNLOCKS
          </p>
        </div>
        <div className="flex justify-center items-start flex-col sm:w-auto w-full gap-3">
          <p className="text-mint font-normal text-sm">TOTAL STAKED: (USD)</p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              $ 4,560,000
              <span className="absolute bottom-full right-0 text-[#50E3C2] text-[11px] font-abel">
                +39.69%
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
          <p className="text-mint font-normal text-sm">TOTAL PROPOSALS:</p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              420
            </p>
          </div>
        </div>
        <div className="flex justify-start  items-center gap-10">
          <div className="flex justify-center flex-col items-center gap-1">
            <img src="/nft.png" className="object-contain w-[70px]" alt="" />
            <p className="font-abel text-xl text-white opacity-70 leading-[1]">
              FRAT
            </p>
            <p className="font-abel text-[30px] text-white opacity-70 leading-[1]">
              $0.15{" "}
            </p>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <img src="/nft.png" className="object-contain w-[70px]" alt="" />
            <p className="font-abel text-xl text-white opacity-70 leading-[1]">
              xFRAT
            </p>
            <p className="font-abel text-[30px] text-white opacity-70 leading-[1]">
              $1,600
            </p>
          </div>
        </div>
      </div>
      <div className="grid mt-8 grid-cols-1 lg:grid-cols-[1fr__320px] items-start w-full gap-10">
        <div className="w-full relative flex justify-start items-center md:items-start flex-col gap-3 ">
          <h2 className="text-white font-alumni font-normal text-[40px] leading-[1] ">
            Latest Proposals
          </h2>
          <div className=" flex flex-col justify-start items-start w-full gap-5 pr-4 greenScroll max-h-[660px] overflow-y-auto">
            <ProposalBox />
            <ProposalBox />
            <ProposalBox />
            <ProposalBox />
            <ProposalBox />
          </div>
          <div className="absolute pointer-events-none bottom-0 left-0 w-full h-[75px] bg-shadow"></div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-5">
          <h3 className="uppercase text-white font-normal font-alumni opacity-90 text-[40px]">
            latest nfts
          </h3>
          <div className="flex justify-center items-center flex-col border border-solid border-white rounded-[10px] w-full bg-dashBox px-5 py-4 gap-5">
            <div className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 auto-rows-fr gap-y-5 gap-x-3 place-items-center">
              <img
                src="/dash-nft.png"
                className="w-[110px] object-contain"
                alt=""
              />
              <img
                src="/dash-nft.png"
                className="w-[110px] object-contain"
                alt=""
              />
              <img
                src="/dash-nft.png"
                className="w-[110px] object-contain"
                alt=""
              />
              <img
                src="/dash-nft.png"
                className="w-[110px] object-contain"
                alt=""
              />
              <img
                src="/dash-nft.png"
                className="w-[110px] object-contain"
                alt=""
              />
              <img
                src="/dash-nft.png"
                className="w-[110px] object-contain"
                alt=""
              />
            </div>
            <button className="bg-radialGreen uppercase font-bold text-white rounded-[10px] w-[120px] h-[40px] text-xl border-none">
              view all
            </button>
          </div>
          <div className="flex justify-center items-start flex-col border border-solid border-white rounded-[10px] w-full bg-dashBox px-5 py-4 gap-2">
            <p className="text-white font-normal text-[26px] leading-[1.3] font-alumni">
              SANCTUM <br />
              TOTAL VALUE LOCKED:
            </p>
            <p className="text-white font-normal text-[50px] font-alumni leading-[1]">
              $42,000,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
